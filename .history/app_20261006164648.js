import express from "express";
import amostraRoutes from "./routes/amostraRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostras", amostraRoutes)

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})
{
  "codigo": "AM-101",
  "material": "Chapa de aço",
  "origem": "Estamparia",
  "resultado": "Aguardando análise"
}
{
  "codigo": "AM-103",
  "material": "Óleo lurbificante",
  "origem": "Usinagem",
  "resultado": "Reprovada"
}
{
    "codigo": "AM-102",
    "material": "Tinta industrial",
    "origem": "Pintura",
    "resultado": "Aprovada"
  }