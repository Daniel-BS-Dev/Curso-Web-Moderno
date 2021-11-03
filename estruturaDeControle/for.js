// for in. Não vai me dar o value do elemento mas sim o numero ou a posição do array
const array = [1,2,3,4,5,6,4,3,2,21]

for(let a in array){
    // array[a] value
    // a posição
    console.log(a, array[a])
}

// para pegar os atributos e valores de um objeto
const person = {
    name: "Daniel",
    surname: "silva",
    age:29,
    weight: 64.5
}

for (let attribute in person){
    console.log(`${attribute} = ${person[attribute]}`)
}