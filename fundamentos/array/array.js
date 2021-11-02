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