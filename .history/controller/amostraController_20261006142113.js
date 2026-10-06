import { Amostra } from "../model/Amostra";
import { cadastrar, listar, buscarPorIndice, exlcuir } from "../Repository/amostraRepository";

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostra(){

}

export function buscarAmostraIndice(indice){
    
}

export func