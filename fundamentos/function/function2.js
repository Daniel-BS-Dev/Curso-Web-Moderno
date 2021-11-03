// Armazenando uma função em uma variavel
const printSum = function(a,b){
    console.log(a + b)
}

printSum(4,5)

// Armazenando uma função arrow em uma variavel
const sum = (a, b) => {
    return a + b
}

console.log(sum(5,3));

// retorno implicito
const subtract = (a, b) => a - b;