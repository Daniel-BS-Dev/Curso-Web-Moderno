class Ciclofinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamento = []
    }

    addLancamento (...lancamento){
        lancamento.forEach(l => this.lancamento.push(l));
    }
}

// herança 
class grandfather {
    constructor(nickname){
        this.nickname = nickname
    }
}

class father extends grandfather {
    constructor(nickname, profission = 'professor'){
        super(nickname)
        this.profission = profission
    }
}

class child extends father{
  constructor(){
      super('silva')
  }
}

const child1 = new child();
console.log(child1)