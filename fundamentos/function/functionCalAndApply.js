function getPrice(income=0, real='R$'){
    return `${real} ${this.price * (1- this.desc) * (1 + income)}`
}

const product = {
    name: 'Notbook',
    price: 4589,
    desc:0.15,
    getPrice
}

console.log(product.getPrice());

// outra maneira de add o price e desc
const car = {
    price:49990,
    desc: 0.20
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

// qual a diferença entre o apply e call
console.log(getPrice.call(car, 0.17, 's')) // posso passar os produtos direto
console.log(getPrice.apply(car,[0.8, 's'])) // paramtros são passados em um array