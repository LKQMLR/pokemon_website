import InputField from "./inputField/InputField";
export default function InputNom({ value, onChange }) {
  return (
    <>
      <InputField
        label={"Nom:"}
        type={"text"}
        name={"lastname"}
        id={"lastname"}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
