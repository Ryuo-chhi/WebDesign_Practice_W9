function average(array){
    let avr=0;
    for(let i=0; i<array.length; i++){
        avr+=array[i];
    }
    avr /= array.length;
    return avr;
}

let array=  [85, 90, 78, 92];
console.log(average(array));