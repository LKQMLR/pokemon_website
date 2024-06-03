import InputField from "./inputField/InputField";

export default function InputPseudo({ value, onChange, showValidation }) {
  return (
    <>
      <InputField
        label={"Pseudo:"}
        type={"text"}
        name={"pseudo"}
        id={"pseudo"}
        value={value}
        onChange={onChange}
        helperText={"(3 caractères minimum) "}
      />
      <>{showValidation}</>
    </>
  );
}
