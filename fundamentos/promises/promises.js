/*function speakAfter(seconds, phrase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

speakAfter(3, 'Ola!').then( phrase => phrase.concat("???"))
.then(otherPhrase => console.log(otherPhrase));


// sem promise
const http = require('http')

const getTurma = ( letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, resp => {
        let result = ''

        resp.on('data', dados => {
            result += dados
        })

        resp.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}  

let names = []
getTurma('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))
    console.log('Sem Promise:', names)
})



// coom promise
const http1 = require('http')

const getTurma1 = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) =>{
        http1.get(url, resp => {
            let result = ''
    
            resp.on('data', dados => {
                result += dados
            })
    
            resp.on('end', () => {
                try{
                    resolve(JSON.parse(result))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}  

let names1 = []
getTurma1('A').then(students => {
    names1 = names1.concat(students.map(a => `A: ${a.nome}`))
    console.log('Com Promise:', names1)
})

// mesma operação com asyn await
let getStudends = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}

getStudends()
 .then(students => students.map(a => a.nome))
 .then("Async: ", names => console.log(names))*/

// numero aleatorio
function getNumberAmong(min, max){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(revolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) + min
        revolve(aleatorio)
    })
}


getNumberAmong(10, 30).then(console.log);


// chamando uma promise dps que todos já estão resolvidas
function getNumber(min, max, time){
    if(min > max) [max, min] = [min, max]
    
    return new Promise(revolve => {
        setTimeout(function(){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) + min
        revolve(aleatorio)
        }, time)
    })
}

function getManyNumber(){
    return Promise.all([
        getNumber(1, 60, 100),
        getNumber(1, 60, 400),
        getNumber(1, 60, 800),
        getNumber(1, 60, 1200),
        getNumber(1, 60, 1500)
    ])
}

getManyNumber().then(console.log)