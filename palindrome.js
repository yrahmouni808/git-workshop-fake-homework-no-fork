
function largestPalindromeProduct(n) {
    const startTime = Date.now();
    let maxPalindrome = 0;
    let ops = 0, arr = [];
    let numPalindrome = 0;
    const upperLimit = Math.pow(10, n) - 1;
    const lowerLimit = Math.pow(10, n - 1);
    const totalIterations = (lowerLimit * (lowerLimit + 1)) / 2;
    let a, b, strP = "palindrome";
    if(n % 2 !== 0){
        for (let i = upperLimit; i >= lowerLimit; i--) {
            for (let j = i; j >= lowerLimit; j--) {
                ops++;
                const product = i * j;
                console.log(`${product} and ${((ops / totalIterations) * 100).toFixed(2)}%. Found ${numPalindrome} ${strP}. Num operations = ${ops}`);
                if (product <= maxPalindrome) {
                    break;
                }
                const str = product.toString();
                const reversedStr = str.split('').reverse().join('');
                if (str === reversedStr) {
                    numPalindrome++;
                    if (numPalindrome > 1) {
                        strP = "palindromes";
                    }
                    arr.push(`\n${product} = ${i} x ${j}. Is divisible by 11 = ${product % 11 === 0}.`);
                    if (product > maxPalindrome) {
                        maxPalindrome = product;
                        a = i;
                        b = j;
                    }
                }
            }
        }
    }else{
        arr.push('none.');
        a = "";
        b = "";
        for(let i = 0; i < n; i++){
            a += "9";
            if(i < n / 2){
                b += "9";
            }else{
                if (i === n - 1) {
                    b += "1";
                } else {
                    b += "0";
                }
            }
        }
        a = BigInt(Number(a));
        b = BigInt(Number(b));
        maxPalindrome = BigInt(a * b);
        // b = a.toString();
        // b[b.length - 1] = 1;
        // for()
    }
    console.log(`The largest palindrome is ${maxPalindrome} which equals ${a} times ${b}.`);
    console.log(`Other palindromes found along the way: ${arr}`);
    console.log(`Time elapsed: ${Date.now() - startTime}ms.`)
}

largestPalindromeProduct(5);
