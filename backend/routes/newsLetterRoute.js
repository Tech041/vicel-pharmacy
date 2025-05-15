import { Router } from "express";
import {
  getSubscribedUser,
  subscribeNewsLetter,
} from "../controllers/newsLetterController.js";
const subscriptionRouter = Router();
subscriptionRouter.post("/", subscribeNewsLetter);
subscriptionRouter.get("/subscribed-user", getSubscribedUser);

export default subscriptionRouter;
