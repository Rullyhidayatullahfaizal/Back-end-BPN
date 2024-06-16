import express from "express";
import { getUsers, login, register,Logout } from "../controllers/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import { getDatas } from "../controllers/dataProv.js";
const router = express.Router();


//dataUsers
router.get('/users',verifyToken,getUsers);
router.post('/users',register);
router.post('/login',login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


//data Beras
router.get('/datas',getDatas)


export default router;
