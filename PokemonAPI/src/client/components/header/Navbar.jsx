import { NavLink } from "react-router-dom";
import { useState } from "react";
import bars from "../../assets/bars.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full bg-zinc-400">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="py-4 flex flex-row justify-center items-center w-full sm:hidden"
      >
        <img
          className="w-6 h-6"
          src={bars}
          alt=""
        />
      </button>
      <ul
        className={` ${
          showMenu ? "flex" : "hidden"
        } relative w-full flex-col justify-center items-center py-4 bg-zinc-400 sm:top-0 sm:flex sm:flex-row sm:justify-evenly sm:items-center `}
      >
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink>Accueil</NavLink>
        </li>
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink>Pokédex</NavLink>
        </li>
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink>Jeux Vidéo</NavLink>
        </li>
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink>Jeu de cartes à collectionner</NavLink>
        </li>
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink>Chronologie</NavLink>
        </li>
        <li className="text-center w-full flex flex-row items-center justify-center py-4 sm:py-0 font-bitter">
          <NavLink to="/signup">Inscription</NavLink>
        </li>
      </ul>
      <div className="flex">
        <div className="bg-gray-500 h-2 w-full"></div>
        <div className="bg-red-500 h-2 w-full"></div>
        <div className="bg-amber-500 h-2 w-full"></div>
        <div className="bg-yellow-500 h-2 w-full"></div>
        <div className="bg-green-500 h-2 w-full"></div>
        <div className="bg-blue-500 h-2 w-full"></div>
      </div>
    </nav>
  );
}
