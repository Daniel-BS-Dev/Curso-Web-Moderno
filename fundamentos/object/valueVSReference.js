//passagem por referencia se eu mudar o b a vai sentir a mudança
const person = {
    name: "Paulo"
}

let b = person;
b.name = "Daniel"

console.log(b)
console.log(person)

// outro exemplo de passagem por referencia
let array = [9,4]

let number = array;

number.push(2,4,2)

console.log(array)
console.log(number)

//passagem por valor, se eu altera t o meu p não senti a alterção
let p = 5
let t = p

t= 10
console.log(p)
console.log(t)