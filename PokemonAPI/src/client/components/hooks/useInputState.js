import { useState } from "react";

export default function useInputState() {

  const [inputUserState, setInputUserState] = useState({
    pseudo: "",
    lastname: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  return {inputUserState, setInputUserState}
}