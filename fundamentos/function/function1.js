//função sem retorno
function printSum(a, b){
    console.log(a + b)
}

printSum(9,3)

//função com retorno
function sum(a, b=0){// se o valor b não for passado, b receberá 0
  return a + b;
}

console.log(sum(5))