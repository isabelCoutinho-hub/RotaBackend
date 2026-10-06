import express from "express";
import { cadastrarAmostra, excluirAmostra, listarAmostras,  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra);
router.get("/", listarAmostras)
router.delete("/", excluirAmostra)
router.get()

export default router;