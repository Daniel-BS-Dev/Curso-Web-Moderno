const a =1
const b =2
const c =3

// adding value in object
const obj1 = {a:a, b:b, c:c}
const obj2 = { a, b, c}
console.log(obj1, obj2)


// adding variavel in object
const nameAttr = 'nota' // name
const value = 7.75 // value

const obj3 = {} // creating object
obj3[nameAttr] = value
console.log(obj3)


const obj4 = {[nameAttr] : value} // creating object
console.log(obj4)