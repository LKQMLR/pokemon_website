import logo from "../../assets/Pokemon-Logo.svg";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Log from "../login/Log";

export default function Header() {
  return (
    <div className="sm:fixed sm:w-full bg-zinc-50">
      <div className="flex flex-row justify-between items-center px-4 py-2">
        <img
          className="w-32 h-auto"
          src={logo}
          alt="logo pokemon"
        />

        <div className="flex items-center mx-2">
          <Cart />
          <Log />
        </div>
      </div>
      <div className="flex">
        <div className="bg-gray-500 h-2 w-full"></div>
        <div className="bg-red-500 h-2 w-full"></div>
        <div className="bg-amber-500 h-2 w-full"></div>
        <div className="bg-yellow-500 h-2 w-full"></div>
        <div className="bg-green-500 h-2 w-full"></div>
        <div className="bg-blue-500 h-2 w-full"></div>
      </div>
      <Navbar />
    </div>
  );
}
