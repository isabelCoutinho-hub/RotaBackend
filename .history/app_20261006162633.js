import express from "express0"
import amostraRoutes from "./routes/amostraRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostras", amostraRoutes)

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})