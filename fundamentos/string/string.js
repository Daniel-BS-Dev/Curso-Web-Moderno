const school = "COD3R";


console.log(school.charAt(4));//vai me retorna o elemento q esta na posição 4 do meu array string "R", se eu colocar uma posição que não existe ele vai retorna nada " "
console.log(school.charCodeAt(3));//retorna o valor da tabela ask "51", ou seja, o code
console.log(school.indexOf("R"));//para saber se o valor existe na minha string, ele retorna a posição do elemento verificado, senão existe retona -1
console.log(school.substring(1));//para recorta minha string, vai retornar "OD3R"
console.log(school.substring(0,3));//posso limitar começo e fim, vai da posição 0 a 2 "COD"
console.log("Student ".concat(school).concat("!"))//juntado string "Student COD3R!"
console.log(school.replace("3", "e"))// vai trocar o meu primeiro 3 por e "CODeR"
console.log(school.replace(/\d/g, "e"))//substituiu todos os numeros pelo e "Coder"
console.log(school.replace(/\w/g, "e"))//substitui tudo por e "eeeee "
console.log("Ana estuda fisica".split(" "))//a cada espaço uma nova posição de array