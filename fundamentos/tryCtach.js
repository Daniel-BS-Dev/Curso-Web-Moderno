function throwError(error){
    throw "nos já vimos que o seu error foi:  estamos melhorando sua navegação"
    error
}

function toScream(obj){
try{
console.log((obj.nme).toUpperCase()+"!!!!")
}
catch(e){
    throwError(e)
   }
}

const obj = {
    name:"Daniel"
}

toScream(obj);