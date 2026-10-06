import express from "express";
import { cadastrarAmostra, listarAmostras,  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra);
router.get("/", listarAmostras)
router.

export default router;