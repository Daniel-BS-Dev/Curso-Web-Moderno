function Car(speedMax = 200, delta = 5) {
  //atributo privado
  let currentSpeed = 0;

  // metodo publico
  this.acelerar = function () {
    if (currentSpeed + delta <= speedMax) {
      currentSpeed += delta;
    } else {
      currentSpeed = speedMax;
    }
  };
  //atributo publico
  this.getCurrentSpeed = function () {
    return currentSpeed;
  };
}

const uno = new Car();
uno.acelerar();
console.log(uno.getCurrentSpeed());

const ferrari = new Car(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getCurrentSpeed());