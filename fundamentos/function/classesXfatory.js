//classes
class Product {
   constructor(name){
       this.name = name;
   }

   speak(){
       console.log('Eu sou o', this.name)
   }
}

const p = new Product('daniel');

p.speak();

//factory
const person = name => {
    return{
        speak(){
            console.log('Eu sou o', name)
        }
    }
}

const p1 = person('pedro');

p1.speak();


//função construtura
function product(name) {
     this.name = name
 
    this.speak = function(){
        console.log('Eu sou o', this.name)
    }
 }
 
 const p2 = new product('gabriel');
 
 p2.speak();