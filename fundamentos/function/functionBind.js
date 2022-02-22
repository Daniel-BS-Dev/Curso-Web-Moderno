function Person() {
    this.age = 0;

    setInterval(function() {
        this.age++
        console.log(this.age);
    }.bind(this), 1000) // amarra minha função a função desde

// outra maneira para faz isso não muito usada
const self = this;
setInterval(function() {
    self.age++
    console.log(self.age);
}, 1000)

}

new Person


function Person1() {
    this.age = 0;

    setInterval(() => {
        this.age++
        console.log('Arrow',this.age);
    }, 1000) // na arrow function o this não varia

}

new Person1