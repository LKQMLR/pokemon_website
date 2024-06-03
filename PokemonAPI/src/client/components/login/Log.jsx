import { useState } from "react";
import login from "../../assets/login_icon.svg";
import logout from "../../assets/logout_icon.svg";

export default function Log() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <button
      className={` ${
        isLogged ? "hover:bg-red-200 py-0.5 px-0.5 rounded" : "hover:bg-emerald-200 py-0.5 px-0.5 rounded"
      }`}
    >
      {isLogged ? (
        <img
          src={logout}
          alt="bouton de deconnexion"
          title="deconnexion"
        />
      ) : (
        <img
          src={login}
          alt="bouton de connexion"
          title="connexion"
        />
      )}
    </button>
  );
}
