// function animima é uma função sem nome
const sum = function (x, y){
    return x + y;
}

const showResult = function (a, b, opercao = sum){
    console.log(opercao(a,b));
}

showResult(3,4);
showResult(3,4, sum);
showResult(3,4, function(x,y){
  return x -y;
});

showResult(3,4, (x,y) => x + y);

const person = {
    speak: function(){
        console.log('Opa!')
    }
}

person.speak();