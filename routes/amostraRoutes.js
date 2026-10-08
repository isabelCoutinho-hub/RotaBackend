import express from "express";
import { atualizarAmostra, buscarAmostraIndice, cadastrarAmostra, excluirAmostra,
     listarAmostras  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra)
router.get("/", listarAmostras)
router.delete("/:indice", excluirAmostra)
router.get("/:indice", buscarAmostraIndice)
router.patch("/:indice", atualizarAmostra)

export default router;