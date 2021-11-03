function ifWasTrueISpoke(value){
    if(value){
        console.log("è verdade: "+value)
    }
}

//false
ifWasTrueISpoke()
ifWasTrueISpoke(null)
ifWasTrueISpoke(undefined)
ifWasTrueISpoke(NaN)
ifWasTrueISpoke('')
ifWasTrueISpoke(0)

//true
ifWasTrueISpoke(-1)
ifWasTrueISpoke(' ')
ifWasTrueISpoke('?')
ifWasTrueISpoke([])
ifWasTrueISpoke(1,2)
ifWasTrueISpoke({})