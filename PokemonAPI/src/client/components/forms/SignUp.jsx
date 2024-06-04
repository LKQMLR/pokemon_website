import InputPseudo from "../inputs/InputPseudo";
import InputNom from "../inputs/InputNom";
import InputPrenom from "../inputs/InputPrenom";
import InputEmail from "../inputs/InputEmail";
import InputPassword from "../inputs/InputPassword";
import InputConfirmPassword from "../inputs/InputConfirmPassword";
import useInputState from "../hooks/useInputState";
import InfosMessage from "../modals/InfosMessage";
import useFormValidation from "../hooks/useFormValidation";
import { useState } from "react";
import { postUserData } from "../../api/api.js";

export default function SignUp() {
  const { showValidation, checkValidation } = useFormValidation();
  const { inputUserState, setInputUserState } = useInputState();
  const [fetchMessage, setFetchMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (checkValidation(inputUserState)) {
      try {
        const result = await postUserData(inputUserState);
        console.log("result :", result);
        setFetchMessage(result.message);
        setShowModal(true);
      } catch (error) {
        setFetchMessage(error.message);
        setShowModal(true);
      }
    }
  }

  return (
    <div className="mx-5">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="bg-white max-w-4xl mx-auto rounded-lg border-2 border-secondary shadow-md py-6 px-6 mt-32"
      >
        <p className="text-center text-2xl text-secondary font-semibold m-5">Inscris-toi</p>

        <div className="w-full px-4">
          <InputPseudo
            value={inputUserState.pseudo}
            onChange={(e) => setInputUserState({ ...inputUserState, pseudo: e.target.value })}
            showValidation={
              showValidation.pseudo && (
                <span className="text-red-500  font-semibold">Veuillez entrer au minimum 3 caractères</span>
              )
            }
          />
        </div>

        <div className="sm:flex">
          <div className="w-full px-4">
            <InputNom
              label={"Nom:"}
              value={inputUserState.lastname}
              onChange={(e) => setInputUserState({ ...inputUserState, lastname: e.target.value })}
            />
          </div>

          <div className="w-full px-4">
            <InputPrenom
              value={inputUserState.name}
              onChange={(e) => setInputUserState({ ...inputUserState, name: e.target.value })}
            />
          </div>
        </div>

        <div className="w-full px-4">
          <InputEmail
            value={inputUserState.email}
            onChange={(e) => setInputUserState({ ...inputUserState, email: e.target.value })}
            showValidation={
              showValidation.email && (
                <span className="text-red-500  font-semibold">
                  Saisie incorrect, veuillez ressaisir votre adresse email
                </span>
              )
            }
          />
        </div>
        <div className="sm:flex mb-5">
          <div className="w-full px-4">
            <InputPassword
              value={inputUserState.password}
              onChange={(e) => setInputUserState({ ...inputUserState, password: e.target.value })}
              showValidation={
                showValidation.password && <p className="text-red-500  font-semibold">Mot de passe incorrect</p>
              }
            />
          </div>

          <div className="w-full px-4">
            <InputConfirmPassword
              value={inputUserState.confirmPassword}
              onChange={(e) => setInputUserState({ ...inputUserState, confirmPassword: e.target.value })}
              showValidation={
                showValidation.confirmPassword && (
                  <p className="text-red-500  font-semibold">Le mot de passe n'est pas identique</p>
                )
              }
            />
          </div>
        </div>
        <div className="flex justify-end px-4">
          <button className="border-2 border-primary py-2 px-4 rounded font-semibold text-secondary  hover:bg-primary hover:border-2 hover:border-secondary active:border-2 active:border-primary active:bg-white">
            Confirmer
          </button>
        </div>
      </form>
      <InfosMessage
        fetchMessage={fetchMessage}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
