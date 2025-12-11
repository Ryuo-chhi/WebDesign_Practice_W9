function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    if(width>0 || height>0){
       for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            rectangleString+='*';
        }
        if(i<height-1){
            rectangleString+='\n';
        }
       } 
    }
    return rectangleString;
}

console.log(challenge1(3,3));
