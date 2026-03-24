'use strict'

function criarListaNumeros (quantidade){

    let listaNumeros = []

    for (let i = 0; i <= quantidade; i++ ){
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPares (quantidade){

    let listaNumeros = []

    for (let i=0; i <= quantidade; i+=2){
        listaNumeros.push(i)
    }
        return listaNumeros
}

function criarListaImpares (quantidade){

    let listaNumeros = []

    for (let i = 1; i< quantidade; i+=2){
        listaNumeros.push(i)
    }
        return listaNumeros
}
console.table(criarListaImpares(26))

function listaMultiplo5(quantidade){

    let listaNumeros=[]

    for (let i = 0; i<quantidade; i+=5){
        listaNumeros.push(i)
    }
        return listaNumeros
}

function listaPotencia2(quantidade) {
    let listaNumeros = []

    for (let i = 0; i < quantidade; i++) {  
        listaNumeros.push(2 ** i)          
    }

    return listaNumeros  
}

console.table(listaPotencia2(10))