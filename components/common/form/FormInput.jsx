const FormInput = ({
  min,
  max,
  label,
  type,
  rows,
  step,
  name,
  gridClass = "col-12",
  otherClass = "",
  placeholder,
  options = [],
  value,
  defaultValue,
  onChange,
  disable,
  readOnly,
  description,
  tooltip,
  required = false,
}) => {
  let form;

  switch (type) {
    case "textarea":
      form = (
        <textarea
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          rows={rows}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disable}
          readOnly={readOnly}
        />
      );
      break;

    case "select":
      form = (
        <select
          className="form-select border-light rounded-8 h-45 px-15 w-full mt-10"
          name={name}
          disabled={disable}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;

    case "checkbox":
      form = (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            name={name}
            onChange={onChange}
            checked={!!value}
            disabled={disable}
            readOnly={readOnly}
          />
          <label className="form-check-label" htmlFor={name}>
            {name}
          </label>
        </div>
      );
      break;

    case "radio":
      form = (
        <div className="form-radio">
          <div className="radio d-flex items-center">
            <input
              type="radio"
              name={name}
              value={value}
              onChange={onChange}
              disabled={disable}
              readOnly={readOnly}
            />
            <div className="radio__mark">
              <div className="radio__icon" />
            </div>
            <div className="ml-10">{name}</div>
          </div>
        </div>
      );
      break;

    default:
      form = (
        <input
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disable}
          step={step}
          min={min}
          max={max}
        />
      );
      break;
  }

  return (
    <div className={`mt-5 ${gridClass} ${otherClass}`}>
      <h1 className="text-14 lh-12 fw-500 d-flex">
        {label}
        {required ? <span className="text-red-1">*</span> : null}
        {tooltip ? (
          <span
            className="text-white bg-info-2 rounded-100 size-15 flex-center ml-5"
            data-toggle="tooltip"
            data-placement="top"
            title={tooltip}
          >
            i
          </span>
        ) : null}
      </h1>
      {form}
      {description && (
        <div className="text-12 text-light-1 lh-12 mt-5">{description}</div>
      )}
    </div>
  );
};

export default FormInput;
