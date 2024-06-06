import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const query = (queryString, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        console.error(`Erreur: impossible de se connecter à la base de donnée`);
        reject(error);
      } else {
        console.log(`Connexion à la base de données établie...`);

        connection.query(queryString, params, (error, result) => {
          connection.release();
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

export default query;
