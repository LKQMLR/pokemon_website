import { useState } from "react"

export default function useFormValidation() {

  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    email: false,
    password: false,
    confirmPassword: false,
  })

  const areValid = {
    pseudo: false,
    email: false,
    password: false,
    confirmPassword: false,
  }

  // regEx
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*!])([a-zA-Z0-9@#$%^&+=*.\-_!]){6,}$/

  function checkValidation(inputState) {
    if(inputState.pseudo.length < 3) {
      setShowValidation((state) => ({...state, pseudo: true}));
      console.log('Pseudo non valide');
    }else {
      setShowValidation((state) => ({...state, pseudo: false}))
      areValid.pseudo = true;
      console.log('Pseudo validé');
    }

    if(!regexEmail.test(inputState.email)){
      setShowValidation((state) => ({...state, email: true}));
      console.log('Email non valide')
    }else {
      setShowValidation((state) => ({...state, email: false}));
      areValid.email = true
      console.log('Email validé');
    }

    if(!regexPassword.test(inputState.password)){
      setShowValidation((state) => ({...state, password: true}))
      console.log('Mot de passe non valide')
    }else {
      setShowValidation((state) => ({...state, password: false}));
      areValid.password = true;
      console.log("Mot de passe validé");
    }

    if(inputState.password !== inputState.confirmPassword) {
      setShowValidation((state) => ({...state, confirmPassword: true}));
      console.log("Mot de passe pas identique");
    }else {
      setShowValidation((state) => ({...state, confirmPassword: false}));
      areValid.confirmPassword = true;
      console.log('Mot de passe identique');
    }

    if(Object.values(areValid).every(values => values)) {
      return true;
    }else {
      false
    }
  }

  return {showValidation, checkValidation}
}