import express from "express";
import { buscarAmostraIndice, cadastrarAmostra, excluirAmostra, listarAmostras  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra)
router.get("/", listarAmostras)
router.delete("/:indice", excluirAmostra)
router.get("/:", buscarAmostraIndice)

export default router;