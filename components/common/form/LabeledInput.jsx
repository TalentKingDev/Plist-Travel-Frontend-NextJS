const LabeledInput = ({
  label,
  type = "text",
  name,
  otherProps = {},
  gridClass = "col-12",
  otherClass = "",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={gridClass + " " + otherClass}>
      <div className="form-input pr-20">
        <input
          type={type}
          value={value}
          name={name}
          {...otherProps}
          className="px-10 py-5 rounded-8 text-14"
          style={{ minHeight: "45px" }}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
        <label
          className="lh-1 text-12 text-light-1 px-5"
          style={{ left: "15px", top: "10px", background: "white" }}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default LabeledInput;