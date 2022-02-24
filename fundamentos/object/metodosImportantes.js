const person = {
    name: "Roberta",
    age: 2,
    wieght: 13
}

console.log(Object.keys(person))  // pegando todas as chaves do objeto
console.log(Object.values(person))// pegando os valores
console.log(Object.entries(person))// returna um novo array com os valores  e as chaves

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
});

// concatenando objetos

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
obj = Object.assign(dest, o1, o2) // primeiro objeto receberá os outros dois
console.log(obj)