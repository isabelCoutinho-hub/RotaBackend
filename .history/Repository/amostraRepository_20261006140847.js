const amostras = [];

export function cadastrar(amostra){
    amostras.push(amostra);
}

export function listar(indice){
    return amostras;
}

export function buscarPorIndice(indice){
    amostras[indice] = amostra;
}

export function exlcuir(indice){
    amostras.splice(indice, 1)
}