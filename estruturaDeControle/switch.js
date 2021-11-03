function mediaStudent(grade){
    switch(Math.floor(grade)){
        case 10:
        case 9:
            console.log('Aprovado com sucesso');
            break;
        case 8: 
        case 7:
        case 6:
            console.log('aprovado');
            break;
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("reprovado");
            break;
        default:
            console.log("numero invalido")

    }
}


mediaStudent(10)
mediaStudent(8)
mediaStudent(6.5)
mediaStudent(4.5)
mediaStudent("d")
