import { createUserInDatabase } from "../models/userModel.js";

export const createUserController = async (req, res) => {
  try {
    const userCreated = await createUserInDatabase(req.body);

    req.session.userId = userCreated.id;
    req.session.pseudo = userCreated.pseudo;
    req.session.role = userCreated.role;

    return res.status(201).json({ message: "Utilisateur créé avec succès", user: userCreated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
