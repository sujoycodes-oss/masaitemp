let scores = [33,22,11,78,32,56,43,99,92,10];
console.log("Array before manipulation \n"+scores);
let count = 0;
for(let i=0; i<scores.length; i++){
    if(scores[i] < 40) scores[i] += 20;
    else if(scores[i] > 90) scores[i] = 90;
}
for(let num of scores){
    if(num>50) count++;
}

console.log("Number of students passed - "+ count);
console.log("Array after all manipulations - \n"+scores);