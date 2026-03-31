'use strict'

var financiamento ={}

function parcela(numParcelas){

    const parcela =[]

    for(let i = 0; i<numParcelas;i++){
        parcela.push(i)
    }
    
    return parcela
}

function calcularValorParcela(valor,listaDeParcelas){

    let valorParcela = []

    for(let i = 0; i < listaDeParcelas; i++){

        valorParcela.push(valor/10)
        
    }
    return valorParcela
}

const listaDeParcelas = parcela(10)

console.log(calcularValorParcela(20000,10))