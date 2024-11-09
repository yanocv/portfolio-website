import React from "react";
import useValidation from "../../hooks/useValidation";

interface FormTextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validate: (value: string) => string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  placeholder,
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
      <textarea
        name={name}
        placeholder={placeholder}
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

export default FormTextArea;
