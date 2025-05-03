import express from "express";
import * as UsersController from "../controllers/users";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get("/",requiresAuth, UsersController.getAuthenticatedUser)
router.get("/users",UsersController.getAllUsers)
router.post("/signup", UsersController.signUp);
router.post("/login", UsersController.login);
router.post("/logout",UsersController.logout)
export default router;
