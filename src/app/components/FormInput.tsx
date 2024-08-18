export default function FormInput({ name, placeholder, type, required }) {
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
