import { Amostra } from "../model/Amostra.js";
import { cadastrar, listar, buscarPorIndice, exlcuir } from "../Repository/amostraRepository.js";

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostras(req, res){
    const amostras = listar();

    res.status(200).json(amostras);
}

export function buscarAmostraIndice(req, res){
    const indice = Number(req.params.indice);

    const amostra = buscarAmostraIndice(indice);

    if(!amostra){
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }
    res.status(200).json(amostra)
}

export function excluirAmostra(req, res){
    const indice = Number(req.params.indice);

    const amostra = buscarAmostraIndice(indice);

    if(!amostra){
        

    }
}