let p = () => new Promise((resolve, reject) => {
    resolve(4)
})


console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

setTimeout(() => {
    console.log(5);
}, 2000);

p().then((res) => { //Priority po myint settimeout htet
    console.log(res);
})

console.log(3);

//Array.flat() dimentional array to ko phyay cha nai tl

//eg. const ary =["a","b",[1,2,[3,1]]];
//console.log(ary.flat(Infinity))//akone phyee cha chin yin inf
//2khu phyee cha chin tl so ary.flat(2)

const array = [1,2,3,4,5];
let spliceArray = array.splice(1,3,"a");//1 ka ny 3 hti phyote ml "a" ko ta khan htae lyk ml 

console.log(array);
console.log(spliceArray);


//Array Sorting

//ary.sort(a,b) => a-b;

// (a - b) 
// =======
// if result is positive then swap


// (b -a )
// =======
// if result is nagative then swap
