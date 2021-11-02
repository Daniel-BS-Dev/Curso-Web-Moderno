let a = 7;
let b = 94;

// trocando o valor das variaveis
let temp = a;
a = b;
b = temp;

// outra forma
[a, b] = [b, a];

console.log(a);
console.log(b);