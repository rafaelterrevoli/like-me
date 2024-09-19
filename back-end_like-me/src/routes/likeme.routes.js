import { Router } from "express";
import { controller } from "../constrollers/likeme.controller.js";

const router = Router();

router.get("/posts", controller.getAllPosts);

router.post("/posts", controller.addPost);

export default router;
