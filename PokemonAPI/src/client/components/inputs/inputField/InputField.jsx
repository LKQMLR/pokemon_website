export default function InputField({ label, type, name, id, value, onChange, helperText }) {
  return (
    <>
      <label
        className="block mt-2 text-secondary font-semibold"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="border border-primary w-full py-2 rounded outline-none px-2"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
      <small>{helperText}</small>
    </>
  );
}
