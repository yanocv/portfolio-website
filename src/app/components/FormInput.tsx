interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
}

export default function FormInput({
  name,
  placeholder,
  type,
  required
}: FormInputProps): JSX.Element {
  return (
    <input
      type={type}
      name={name}
      className="form-control mt-x-0"
      placeholder={placeholder}
      required={required}
    />
  );
}
