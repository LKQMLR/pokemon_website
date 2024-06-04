export const postUserData = async (userData) => {
  try{
    const response = await fetch("/signup", {
      method: "POST",
      headers : {"Content-Type" : "application/json"},
      body: JSON.stringify(userData)
    })
    console.log(response)

    if(!response.ok) {
      const errorMessage = await response.json()
      throw new Error(errorMessage.message)
    }
    else {
      const data = await response.json();
      return data
    }

  }
  catch(error) {
    if(error instanceof SyntaxError && error.message.includes("Unexpected token")){
      throw new Error("Problème de connexion. Veuillez vérifier votre réseau")
    }
    throw error
  }
}

// CATCH avec FETCH ne gère pas : 
// (erreur client) : 400 bad request, 401 unauthorized, 404 not found...
// (erreur serveur) : 500 internal server error, 503 service unavailable...

// CATCH avec FETCH gère les erreurs qui (reject)
// mauvaise addresse
// plus de connexion internet