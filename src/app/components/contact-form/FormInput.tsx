import React from "react";
import useValidation from "../../hooks/useValidation";

interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (value: string) => string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  validate
}) => {
  const { errors, validateField } = useValidation();

  const handleBlur = (): void => {
    validateField(name, value, validate);
  };

  return (
    <div className={`form-group ${errors[name] ? "has-error" : ""}`}>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        required
      />
      {errors[name] && <p className="text-danger">{errors[name]}</p>}
    </div>
  );
};

export default FormInput;
