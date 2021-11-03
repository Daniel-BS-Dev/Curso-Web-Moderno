const person = {
    name: 'Ana',
    age: 5,
    address: {
        number: 1000
    }
}

// tire do objeto person name e age
const {name, age} = person
console.log(name, age)

// tire do objeto person name e age e atribuindo outros nomes
const {name: n, age: i} = person
console.log(n, i)

//pegando o endereço e atribuindo o cep
const {address:{ number, cep}} = person
console.log(number, cep)