import { Amostra } from "../model/Amostra";
import { cadastrar, listar, buscarPorIndice, exlcuir } from "../Repository/amostraRepository";

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new (descricao, preco, peso);

    cadastrar(produto);

    res.status(201).json(produto);
}