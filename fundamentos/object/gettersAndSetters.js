const sequence = {
    _value: 1,  // vai ser acessada apenas dentro do objeto

    get value(){ return this._value},
    set value(valor){
        if(valor > this._value){
            this._value = valor
        }
    }
}

console.log(sequence.value, sequence.value);
sequence.value = 1000;
console.log(sequence.value, sequence.value);