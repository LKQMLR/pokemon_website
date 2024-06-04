import { useEffect } from "react";
import pokeball from "../../assets/pokeball_infos.svg";

export default function InfosMessage({ fetchMessage, showModal, setShowModal }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("render");
      setShowModal(false);
    }, 5000);

    //fonction de nettoyage
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="absolute bottom-8 right-8 border-2 bg-white border-primary min-w-44 rounded-md py-2 px-2 text-red-500 font-semibold ">
          <div className="flex justify-between w-full">
            {fetchMessage}
            <img
              src={pokeball}
              alt="pokeball"
            />
          </div>
        </div>
      )}
    </>
  );
}
