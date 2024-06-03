import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <Link className="mr-10">
      <img
        className="hover:bg-amber-200 py-0.5 px-0.5 rounded"
        src={cart}
        alt="panier achat vide"
      />
    </Link>
  );
}
