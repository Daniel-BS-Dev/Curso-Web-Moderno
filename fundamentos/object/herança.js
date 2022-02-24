const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const audi = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__) // acessando o elemento pai
console.log(ferrari.__proto__ === Object.prototype) 


// herança
const grandfather = {Attribute1: 'a'}
const father = { __proto__: grandfather, Attribute2: 'b'}
const child = { __proto__: father, Attribute3: 'c'}
console.log(child.Attribute1)


// outro tipo de herança
const car = {
    velAtual: 0,
    velMax: 200,
    aceleramais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari.status())
console.log(volvo.status())


// criando uma copia de objeto

const father1 = {
    name: 'Pedro',
    colorHair: 'preto'
}

const child1 = Object.create(father1) 
child1.name = "ana"