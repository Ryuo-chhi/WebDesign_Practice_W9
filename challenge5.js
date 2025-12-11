function countWord(string){
    let count = 0;
    if(!string.empty){
        count++;
    }
    for(let i=0; i<string.length; i++){
        if((/\s/.test(string[i])) && /^[A-Za-z]$/.test(string[i+1])){
            count++;
        }
    }
    return count;
}

let text = "hello world";

console.log(countWord(text))