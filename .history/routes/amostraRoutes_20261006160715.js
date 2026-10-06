import express from "express";
import { cadastrarAmostra, listarAmostras,  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra);
router.get("/", listarAmostras)

export default router;