function winner(string) {
  let candidates = ["A", "B", "C"];
  let result = [0, 0, 0];

  if(string.length === 0){
    console.log("There is not vote yet");
    return;
  }
  for (let p of string) {
    if (p === "A") {
      result[0]++;
    } else if (p === "B") {
      result[1]++;
    } else if (p === "C") {
      result[2]++;
    }
  }
  let max= Math.max(...result);
  for(let i=0; i<result.length; i++){
    if(result[i]===max){
        console.log(candidates[i] + " is winner");
    }
  }

}

let votes = ["A", "B", "B", "C", "A"];

winner(votes);

