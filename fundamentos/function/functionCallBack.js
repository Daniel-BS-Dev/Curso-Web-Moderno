// callback eu passo uma função e quando minha função for chamada essa função e execudata uma ou varias vezes

const manufacturer = ["Mercedes", "Audi", "BMW"];

function show(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

manufacturer.forEach(show);
manufacturer.forEach(function(a){
    console.log(a);
});
manufacturer.forEach((a) => console.log(a));

// segunda maneira de usar o callback

const grade = [7.7, 6.5, 5.2, 8.9, 7.1, 9.8];

// sem callback
let gradeLow = [];
for(let i in grade){
    if(grade[i] < 7){
        gradeLow.push(grade[i]);
    }
}

console.log(gradeLow);

//com callback
gradeLow = grade.filter(x => x < 7);
console.log(gradeLow);