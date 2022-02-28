for(let letter of "coder"){
    console.log(letter);
}// percorre o valor

for(let letter in "coder"){
    console.log(letter);
}// percorre o indice

const map = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promises', {abordado: false}]
]);

// keys e values
for(let m of map){
    console.log(m);
}

// keys 
for(let m of map.keys()){
    console.log(m);
}

// values
for(let m of map.values()){
    console.log(m);
}

// keys and values
for(let [k,v] of map.entries()){
    console.log(k, v);
}