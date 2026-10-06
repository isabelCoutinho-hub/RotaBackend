import express from "express";
import { cadastrarAmostra,  } from "../controller/amostraController.js";

const router = express();

router.post("/", cadastrarAmostra);
router.get("/", )

export default router;