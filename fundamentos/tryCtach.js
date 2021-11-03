function throwError(erro){
    //throw new Error('....')
   // throw "nos já vimos que o seu error foi:  estamos melhorando sua navegação"
   throw{
       id: 1,
       name: erro.name,
       message: erro.message,
       date: new Date
   } 
}

function printNameScreamed(obj){
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

printNameScreamed(obj);