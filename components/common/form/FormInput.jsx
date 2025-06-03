const FormInput = ({
  min,
  max,
  label,
  type,
  rows,
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
          className="border-light rounded-8 py-5 px-15 w-full mt-10"
          name={name}
          disabled={disable}
          onChange={onChange}
          value={value}
        >
          <option value="">{placeholder}</option>
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
          min={min}
          max={max}
        />
      );
      break;
  }

  return (
    <div className={`mt-5 ${gridClass} ${otherClass}`}>
      <h1 className="text-14 lh-12 fw-500">{label}</h1>
      {form}
    </div>
  );
};

export default FormInput;
