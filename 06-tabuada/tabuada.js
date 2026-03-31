'use strict'

import {

    criarListaNumeros,
    criarListaAdicao,
    criarListaSubtracao,
    criarListaMultiplicacao,
    criarListaDivisao

} from "./operacoes.js"

const gerarTabuada = document.getElementById('gerarTabuada')

function criarLinha(numero, adicao, subtracao, multiplicacao, divisao) {

    const tabela = document.getElementById('tabela') // pegando a tabela

    const tr = document.createElement('tr') //criando a linha (Dentro da tabela)

    const tdNumeros = document.createElement('td') // criando coluna (Dentro do (tr) de numeros )
    tdNumeros.textContent = numero // mostra o numero (de 1 Até 10)

    const tdAdicao = document.createElement('td') // criando colula (Dentro dentro do (tr) de soma )
    tdAdicao.textContent = adicao // mostra o resultado da soma

    const tdSubtracao = document.createElement('td') // criando coluna (Dentro do (tr) de subtracao)
    tdSubtracao.textContent = subtracao // mostra o resultado da subtracao

    const tdMultiplicacao = document.createElement('td') // criando coluna (Dentro do (tr) de subtracao)
    tdMultiplicacao.textContent = multiplicacao

    const tdDivisao = document.createElement('td') // criando coluna (Dentro do (tr) de subtracao)
    tdDivisao.textContent = divisao

    tr.replaceChildren(tdNumeros, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao) // pega os elementos das colunas(td) e adiciona na linha (tr)
    tabela.appendChild(tr) // adiciona a linha (tr) dentro da tabela
}

function preencherTabela(){

    const numero = Number(document.getElementById('numero').value) // pega o valor digitado pelo o usuario, ja vindo em forma de Number

    //Criando listas com resultados
    const listaNumeros = criarListaNumeros(10)
    const listaAdicao = criarListaAdicao(numero)
    const listaSubtracao = criarListaSubtracao(numero)
    const listaMultiplicacao = criarListaMultiplicacao(numero)
    const listaDivisao = criarListaDivisao(numero)

    document.getElementById('tabela').replaceChildren()    //limpa a tabela antes de preencher
    
    for (let i = 0; i <10; i++){  // Estrutura de repetição
        criarLinha(listaNumeros[i],listaAdicao[i],listaSubtracao[i],listaMultiplicacao[i],listaDivisao[i]) // responsavel por percorrer o array e preencher a tabela
    }
}

 gerarTabuada.addEventListener("click",preencherTabela)
