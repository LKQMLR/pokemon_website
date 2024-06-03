import InputField from "./inputField/InputField";

export default function InputPassword({ value, onChange, showValidation }) {
  return (
    <>
      <InputField
        label={"Mot de passe:"}
        type={"password"}
        name={"password"}
        id={"password"}
        value={value}
        onChange={onChange}
        helperText={"(6 caractères min, 1 chiffre, 1 maj et 1 caractère spécial requis) "}
      />
      <>{showValidation}</>
    </>
  );
}
