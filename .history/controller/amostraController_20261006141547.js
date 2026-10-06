import { Amostra } from "../model/Amostra";
import { cadastrar, listar, buscarPorIndice, exlcuir } from "../Repository/amostraRepository";

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    
}