function largestPrime(n) {
    const start = Date.now();
    if (n < 2) {
        return -1;
    }
    if(n === 2){
        return 2;
    }
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

    return ([2, ...arr])[n-1];
}
function largestPrimeArr(n) {
    const start = Date.now();
    if (n < 2) {
        return -1;
    }
    if(n === 2){
        return 2;
    }
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


console.log(largestPrimeArr(10));
