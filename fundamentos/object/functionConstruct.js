//usando a notação literal
const obj1 = {};
console.log(obj1);

// object em js
const obj2 = new Object();
console.log(obj2);

// funções construturas
function Product(name, price, desc) {
  this.name = name;

  this.getPriceDesc = () => {
    return price * (1 - desc);
  };
}

const p1 = new Product("caneta", 20, 5);
console.log(p1.getPriceDesc());

// função factory
function createFunction(name, salary, falta) {
  return {
    name,
    salary,
    falta,
    getSalary() {
      return (salary / 30) * (30 - falta);
    },
  };
}

const f1 = createFunction("joao", 7980, 4);
console.log(f1.getSalary());


// congelando o object

Object.freeze(p1);