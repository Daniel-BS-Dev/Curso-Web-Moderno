// atribuinido elemento
const tecnology = new Map()
tecnology.set('react', {framework: false})
tecnology.set('angular', {framework: true})


// pegando elemento. O Map não aceita keys repetidas
console.log(tecnology.get('react').framework)


const aLotkeys = new Map(
    [
        [function () {}, 'function'],
        [{}, 'object'],
        [1234, 'number']
    ]
);

aLotkeys.forEach((keys, values) => {
    console.log(keys, values)
})

// tem o valor
console.log(aLotkeys.has(1234))
aLotkeys.delete(1234);