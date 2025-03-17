const x = '10'

//checar se o x é um número


if(!Number.isInteger(x) ){
    throw new Error("O vlaor de x não é um número inteiro")
}

console.log("Continuado o código...")