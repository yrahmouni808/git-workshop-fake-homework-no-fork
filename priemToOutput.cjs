const fs = require('fs');
function largestPrime(n) {
    const start = Date.now();
    if (n < 2) {
        return -1;
    }
    if(n === 2){
        return 2;
    }
    n--;
    let arr = [];

    let i = 3;
    while(arr.length < n) {
        if (helper(i, arr)) {
            arr.push(i);
        }
        i += 2;
    }
    let retVal;
    if(Date.now() - start > 1000){
        retVal = `${((Date.now() - start) / 1000).toFixed(2)}s`;
    }else{
        retVal = `${(Date.now() - start)}ms`;
    }
    console.log(`Calculated after ${retVal}.`);

    return [2, ...arr];
}
function helper(n, arr){
    let i = 0;
    while(10*i*i<n){
        if(n % arr[i] === 0){
            return false;
        }
        i++;
    }
    return true;
}

function printArr(arr){
    const start = Date.now();
    let str = "";
    for(let i = 0; i<arr.length; i++){
        str += ` **Prime(${i + 1})= ${arr[i]}** `;
        if(i % 5 === 0){
            str+="\n";
        }
    }
    fs.writeFileSync("output.txt", `Welcome to the list of primes. Here are ${arr.length} primes:\n\n` + str);
    let retVal;
    if(Date.now() - start > 1000){
        retVal = `${((Date.now() - start) / 1000).toFixed(2)}s`;
    }else{
        retVal = `${(Date.now() - start)}ms`;
    }
    console.log(`Written to output after ${retVal}.`);
    return "done";
}

console.log(printArr(largestPrime(10))); //Before pushing, make sure you ran a low number
