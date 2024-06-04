import { createUserInDatabase } from "../models/userModel.js";

export const createUserController = async (req, res) => {
  try {
    const userCreated = await createUserInDatabase(req.body);
    return res.status(201).json({message : "Utilisateur créé avec succès", userCreated});
  } catch(error) {
    console.error(`Une erreur est survenue lors de la création d'un utilisateur : ${error}`)
    return res.status(500).json({message : "Oups une erreur s'est produite lors de l'inscription"})
  }
}