import InputField from "./inputField/InputField";

export default function InputEmail({ value, onChange, showValidation }) {
  return (
    <>
      <InputField
        label={"Email:"}
        type={"text"}
        name={"email"}
        id={"email"}
        value={value}
        onChange={onChange}
      />
      <>{showValidation}</>
    </>
  );
}

{
  /* <label
className="block mt-2 text-secondary font-semibold"
htmlFor="email"
>
*Email:
</label>
<input
className="border border-primary w-full py-2 rounded outline-none px-2"
value={inputUserState.email}
onChange={(e) => setInputUserState({ ...inputUserState, email: e.target.value })}
type="text"
name="email"
id="email"
/>
{showValidation.email && (
<span className="text-red-500  font-semibold">Saisie incorrect, veuillez ressaisir votre adresse email</span>
)} */
}
