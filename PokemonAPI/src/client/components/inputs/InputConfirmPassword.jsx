import InputField from "./inputField/InputField";

export default function InputConfirmPassword({ value, onChange, showValidation }) {
  return (
    <>
      <InputField
        label={"Confirmer le mot de passe:"}
        type={"password"}
        name={"confirmPassword"}
        id={"confirmPassword"}
        value={value}
        onChange={onChange}
      />
      <>{showValidation}</>
    </>
  );
}
