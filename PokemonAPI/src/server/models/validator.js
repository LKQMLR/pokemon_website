import query from "../database.js";

export const verifEmailInDatabase = async (email) => {
  try {
    const sql = `SELECT email FROM utilisateurs WHERE email = ?`;

    const result = await query(sql, [email]);
    return result;
  } catch (error) {
    console.error(`Erreur lors de la requête SQL : ${error}`);
    throw error;
  }
};
