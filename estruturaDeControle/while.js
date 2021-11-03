function whichNumber(min, max){
    let number = Math.random() * (max - min) + min;
    return Math.round(number);
}


let stopCounter = 1;

while(stopCounter != 0){
    stopCounter = whichNumber(0, 10);
    console.log(stopCounter);
}