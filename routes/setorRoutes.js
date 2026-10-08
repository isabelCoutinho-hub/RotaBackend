import express from "express";
import { cadastrarSetor, listarSetores, buscarSetorIndice,
    atualizarSetor, excluirSetor } from "../controller/setorController.js"; 

const router = express();

router.post("/", cadastrarSetor)
router.get("/", listarSetores)
router.delete("/:indice", excluirSetor)
router.get("/:indice", buscarSetorIndice)
router.patch("/:indice", atualizarSetor)

export default router;