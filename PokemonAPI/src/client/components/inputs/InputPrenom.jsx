import InputField from "./inputField/InputField";
export default function InputPrenom({ value, onChange }) {
  return (
    <>
      <InputField
        label={"Prénom:"}
        type={"text"}
        name={"name"}
        id={"name"}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
