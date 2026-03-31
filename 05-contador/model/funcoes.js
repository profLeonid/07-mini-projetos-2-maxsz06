'use strict'

function criarListaNumeros(quantidade) {
    let listaNumeros = []
    for (let i = 0; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPares(quantidade) {
    let listaNumeros = []
    for (let i = 0; i <= quantidade; i += 2) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaImpares(quantidade) {
    let listaNumeros = []
    for (let i = 1; i < quantidade; i += 2) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaMulti5(quantidade) {  // ✅ nome corrigido
    let listaNumeros = []
    for (let i = 0; i < quantidade; i += 5) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPotencia2(quantidade) {  // ✅ nome corrigido
    let listaNumeros = []
    for (let i = 0; i < quantidade; i++) {
        listaNumeros.push(2 ** i)
    }
    return listaNumeros
}

function criarLinha(numero, par, impar, multi5, potencia2) {
    const tbody = document.getElementById('tabela').querySelector('tbody')
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

    tr.appendChild(tdNumeros)
    tr.appendChild(tdPares)
    tr.appendChild(tdImpares)
    tr.appendChild(tdMulti5)
    tr.appendChild(tdPotencia2)

    tabela.appendChild(tr)
}

function preencherTabela() {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMultiplo5 = criarListaMulti5(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    document.getElementById('tabela').querySelector('tbody').replaceChildren()

    for (let i = 0; i < quantidade; i++) {
        criarLinha(listaNumeros[i], listaPares[i], listaImpares[i], listaMultiplo5[i], listaPotencia2[i])
    }
}

function gerarNumeros() {
    preencherTabela()
    
}