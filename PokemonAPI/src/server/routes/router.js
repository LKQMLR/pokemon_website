import { Router } from "express";
import { createUserController } from "../controllers/userController.js";

const router = Router();

function checkAuthentication(req, res, next) {
  if(req.session.isLogged === true) {
    next();
  }else {
    res.status(301).redirected('/loggin')
  }
}

router.post('/signup', createUserController);



export default router;