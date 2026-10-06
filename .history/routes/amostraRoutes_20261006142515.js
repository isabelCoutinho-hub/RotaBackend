import express from "express";
import { cadastrarAmostra } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarA);

export default router;