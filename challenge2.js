function reverseArray(arr){
    let newArray=[];
    let j=0;
    if(arr.length>0){
        for(let i=arr.length-1; i>=0; i--, j++){
            newArray[j]=arr[i];
        }
    }
    return newArray;
}

let arr = [14,15,16,20];

let newArray = reverseArray(arr);

for(let i = 0; i<newArray.length; i++){
    console.log(newArray[i]);
}