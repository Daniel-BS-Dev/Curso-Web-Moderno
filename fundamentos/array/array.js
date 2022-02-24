const value = [1,8,6,4,6]
//add
value[3] = 10   // adicina na posição 3
value.push(5)   // adiciona no final
value.unshift(8)// adiciona no inicio

//remover
delete value[3] // remove o indice 3
value.pop()       // remove o ultimo indice do meu array
value.shift()     // remove o primeiro indice do meu array

//em javascript o array e um tipo object
console.log(value)

// anotação não literal
let aprovado = new Array('Bia', "Carlos", "Ana")


// anotação literal
aprovado = [ 'Bia', "Carlos", 'Ana']

console.log(aprovado)

//excluindo um indice
aprovado.splice(1, 1) // excluindo Carlos. 1 numero posição 2 numero é numero de elementos a ser excluido
console.log(aprovado)

// excluindo os dois ultimos nome. e adicianndo mais dois
aprovado.splice(1, 2, "Elemento1", "elemento2")

// adicianando sem remover
aprovado.splice(1, 0, "Elemento1", "elemento2")

// pegando elementos com slice do 4 em diante
const element3 = aprovado.slice(3);
console.log(element3)


// pega o indice 2 ate o 3
const element4 = aprovado.slice(1, 4);
console.log(element4)

aprovado.sort() // ordenar o array
console.log(aprovado)