import { Setor } from "../model/Setor.js";
import { cadastrar, listar, buscarIndice, atualizar, excluir
 } from "../Repository/setorRepository.js";

 export function cadastrarSetor(req, res){
     const {nome, sigla, responsavel, ramal} = req.body
 
     const setor = new Setor(nome, sigla, responsavel, ramal);
 
     cadastrar(setor);
 
     res.status(201).json(setor);
 }

 export function listarSetores(req, res){
    const setores = listar();
    
    res.status(200).json(setores);
 }

 export function buscarSetorIndice(req, res){
    const indice = Number(req.params.indice);
    
    const setor = buscarIndice(indice);
    
    if(!setor){
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        })
    }
    res.status(200).json(setor)
 }

 export function atualizarSetor(req, res){
    const indice = Number(req.params.indice);
    
    const setor = buscarIndice(indice);
    
    if(!setor){
        return res.status(404).json({
            mensagem: "setor não encontrado"
        });
    }

    const {nome, sigla, responsavel, ramal} = req.body;

    if (nome !== undefined){
        setor.nome = nome;
    }
    if (sigla !== undefined){
        setor.sigla = sigla;
    }
    if (responsavel !== undefined){
        setor.responsavel = responsavel;
    }
    if (ramal !== undefined){
        setor.ramal = ramal;
    }

    atualizar (indice, setor);

    res.status(200).json(setor);    
 }

 export function excluirSetor(req, res){
    const indice = Number(req.params.indice);
    
    const setor = buscarIndice(indice);
    
    if(!setor){
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        })
    }
    excluir(indice);
    
    res.status(200).json({
        mensagem: "Setor excluído com sucesso"
    })
 }