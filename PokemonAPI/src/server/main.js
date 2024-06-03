import express from "express";
import router from "./routes/router.js";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import session from "express-session"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//permet de traiter les données soumis par url à un formulaire:
app.use(express.urlencoded({extended: true}));
// permet de traiter les données JSON
app.use(express.json());
// gère la session utilisateur
app.use(session({
  name: process.env.SESSION_NAME,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge : 1000 * 60 * 60 * 24 * 7, // 1 semaine
    secure: false // à mettre sur true en production avec HTTPS
  }
    //dans un environnement de production, ici on doit définir une stratégie de stockage.
    //trouvable dans la doc express: expressjs.com/en/resources/middleware/session.html#compatible-session-stores.
}))

app.use('/', router);

ViteExpress.listen(app, PORT, () =>
  console.log(`En attente de requête sur le port : ${PORT}`),
);
