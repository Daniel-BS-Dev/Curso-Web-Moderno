//criando uma função recebendo dois valores de uma objeto
function rand({min=0, max=0}){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max:50, min:60}
console.log(rand(obj))