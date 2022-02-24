const obj1 = {
    a:1,
    b:2,
    c:3
}

console.log(JSON.stringify(obj1)); // transformando em string
console.log(JSON.parse('{ "a":1, "b":"string", "c":true }')) // transformando em json