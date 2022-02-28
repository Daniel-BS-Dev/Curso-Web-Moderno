const times = new Set();

times.add('Palmeiras');
times.add('Vasco');
times.add("Santos");
times.add('Flamengo');
times.add('Gremio');

console.log(times)
console.log(times.size);
console.log(times.has('Vasco'));
times.delete('Santos')

// elimimando as repetições do array
const names = ['Daniel', 'Israel', 'Antoniel', 'Daniel', 'Paula', "Sandra", "Israel", "Daniel"]
const noRepete = new Set(names);
console.log(noRepete);