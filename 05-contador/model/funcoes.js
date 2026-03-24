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


function criarLinha(numero,par, impar, multi5, potencia2) {

    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero

    const tdPares = document.createElement('td')
    tdPares.textContent = par

    const tdImpares = document.createElement('td')
    tdImpares.textContent = impar

    const tdMulti5 = document.createElement('td')
    tdMulti5.textContent = multi5

    const tdPotencia2 = document.createElement('td')
    tdPotencia2.textContent = potencia2

    tr.replaceChildren(tdNumeros, tdPares, tdImpares, tdMulti5, tdPotencia2)

    tabela.appendChild(tr)
}

function prenchertabela(){

    const quantidade= Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMultiplo5 = criarListaMulti5(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    document.getElementById('tabela').replaceChildren()

    for(let i = 0; i < quantidade; i ++){
        criarLinha(listaNumeros[i], listaImpares[i],listaPares[i],listaMultiplo5[i],listaPotencia2[i])
    }
}



function gerarNumeros(){

prenchertabela()
}