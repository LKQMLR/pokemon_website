import query from "../database.js";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import xss from "xss";
import { verifEmailInDatabase } from "./validator.js";

export const createUserInDatabase = async ({ pseudo, lastname, name, email, password }) => {
  try {
    const emailExist = await verifEmailInDatabase(email);
    if (emailExist.length > 0) {
      throw new Error("L'adresse email existe déjà");
    }
  } catch (error) {
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: v4(),
    pseudo: xss(pseudo),
    lastname: xss(lastname),
    name: xss(name),
    email: xss(email),
    password: xss(hashedPassword),
    role: "utilisateur",
  };

  const sql = `INSERT INTO utilisateurs (user_id, pseudo, lastname, name, email, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  try {
    await query(sql, [user.id, user.pseudo, user.lastname, user.name, user.email, user.password, user.role]);
    return user;
  } catch (error) {
    console.error(`Une erreur est survenue durant la requête SQL : ${error}`);
    throw new Error(`Oups une erreur s'est produite...`);
  }
};
