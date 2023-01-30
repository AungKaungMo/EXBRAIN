// let array = [1,2,3,4,5,6,7,8,9];

// let ran = array.sort(()=> Math.random());
// console.log(ran)

let array = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    
let i= 0;
let shuffleArray = [];
let randomIndex = [];
while(i< array.length){
   
    let randomNumber = Math.floor(Math.random() * array.length);

    if(!randomIndex.includes(randomNumber)){
        shuffleArray.push(array[randomNumber]);
        randomIndex.push(randomNumber);
        i++;
        console.log(shuffleArray)
    }
    
}
