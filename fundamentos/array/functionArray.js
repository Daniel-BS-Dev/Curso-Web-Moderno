const Aprove = [ 'Paulo', 'Daniel', 'Ana', "Israel", 'Sandra', "Thais"]

// a 3 parametros que eu posso passar em um forEach
Aprove.forEach(function(name, indice, array){
    console.log(`Foreach com function: ${indice + 1}. ${name} ${array}`)
})

Aprove.forEach(name => {
    console.log(`Foreach com : ${name}`)
})

const showAprove = (name, indice) => {
    console.log(`${indice + 1}- ${name}`)
}
Aprove.forEach(showAprove);

// transformando um array em outro array
const number = [1, 2, 3, 4, 5]
number.map(function(e) {
    return console.log(e * 2);
})

// função transformar real
const transforme = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
result = number.map(number => number * 3).map(transforme);
console.log(result)


// filter 
const product = [
    {name: 'Notebook', price: 2499, fragil: true},
    {name: 'ipad Pro', price: 4199, fragil: true},
    {name: 'Copo de Vidro', price: 12.49, fragil: true},
    {name: 'Copo de Plastico', price: 1499, fragil: true}
]


const p = product.filter(p => {
    return p.price > 1500;
})

console.log("Filter: ", p);



// reduce 
const student = [
    {name: 'Noberto', grade: 9.99, bolcista: true},
    {name: 'Paulo', grade: 7.86, bolcista: false},
    {name: 'Cicero', grade: 10.00, bolcista: false},
    {name: 'Camila', grade: 8.96, bolcista: true}
]

const result1 = student.map(a => a.grade).reduce(function(count, sum){
   console.log("Reduce",count, sum)
   return count + sum;
}, 10) // 10 valor inicial