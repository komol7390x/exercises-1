// <<<<<<< exercises-1
function prime(a) {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(a); i ++){
        if (a % i == 0) {
            return false
        }
    }
    return true
}
function findPrimes(a, b) {
    let arr=[]
    for (let i = a; i <= b; i++){
        let a = prime(i)
        if (a) {
            arr.push(i)
        }
    }
    return arr
}
console.log(findPrimes(1, 1000000));
// [11, 13, 17, 19]
// --------------------------------------------------------
// task-1
function sumEvenOdd(arr) {
    let obj = {
        even: 0,
        odd: 0
    }
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] != "number") {
            continue
        }else if (arr[i] % 2 == 0) {
            obj.even+=arr[i]
        } else if (arr[i] % 2 != 0) {
            obj.odd += arr[i]
        }
    }
    return obj
}
// console.log(sumEvenOdd([1, 2, 3, 4, 5, 6, 7, " "]));
// ---------------------------------------------------------------
// task-2
function findLargestSmallest(arr) {
    let obj = {
        largest: Math.max(...arr),
        smallest: Math.min(...arr)
    }
    return obj
  }
// console.log(findLargestSmallest([5, 1, 8, 10, -2]));
// console.log(findLargestSmallest([3, 3, 3]));
// ---------------------------------------------------------------
// task-3

function reverseObject(obj) {
    // console.log(obj);
    let obj2={}
    for (let [key,val] of Object.entries(obj)) {
        obj2[val]=key
    }
    return obj2
}
// console.log(reverseObject({ a: 1, b: 2, c: 3 }));
// console.log(reverseObject({ x: "y", z: "w" }));

// ---------------------------------------------------------------
// task-4
function flattenArray(arr) {
    return arr.flat()
}
// console.log(flattenArray([[1, 2], 3, [4, [5]]]));  // [1, 2, 3, 4, [5]]);
// console.log(flattenArray([1, [2, 3], [4, 5]])); // [1, 2, 3, 4, 5]);

// ---------------------------------------------------------------
// task-5
function calculatePower(base, exponent) {
    return Math.pow(base,exponent);
}

function calculatePower1(base, exponent) {
    if (exponent == 0) {
        return 1
    }
    let sum=1
    for (let i = 0; i < exponent; i++){
        sum*=base
    }
    return sum
}
// console.log(calculatePower(2, 3)); // 8
// console.log(calculatePower(5, 0)); // 1

// console.log(calculatePower1(2, 3)); // 8
// console.log(calculatePower1(5, 0)); // 1

// ---------------------------------------------------------------
// task-6

function countVowelsConsonants(str="") {
    str=str.toLowerCase()
    let vowel1 = "aeuio"
    let consonant1 = "qwrtypsdfghjklzxcvbnm"
    let obj = {
        vowel: 0,
        consonants:0
    }
    for (let i = 0; i < str.length; i++){
        if (vowel1.includes(str[i])) {
            obj.vowel+=1
        } else if (consonant1.includes(str[i])) {
            obj.consonants+=1
        }
    }
    return obj
}
// console.log(countVowelsConsonants("hello"));
// console.log(countVowelsConsonants("world"));
// ---------------------------------------------------------------
// task-7
function findMissingNumbers(arr, start, end) {
    let arr2 = [];
    for (let i = start; i <= end; i++){
        if (!(arr.includes(i))) {
            arr2.push(i)
        }
    }
    return arr2
}
// console.log(findMissingNumbers([1, 3, 5], 1, 5)); //[2, 4]
// console.log(findMissingNumbers([10, 12, 15], 10, 15)); //[11, 13, 14]
// ---------------------------------------------------------------
// task 8
function safeAccess(obj, keyPath) {
    const first = keyPath.split(".")
    for (let [key,val] of first) {
        obj = obj?.[key]
        if (obj === undefined) {
            return null
        }
    }
    return obj?? null
}

// console.log(safeAccess({ a: { b: { c: 10 } } }, "a.b.c"));
// ---------------------------------------------------------------
// task 9

function removeDuplicates(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++){
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// console.log(removeDuplicates([5, 5, 5, 5]));
// ---------------------------------------------------------------
// task 10
function multiplyAndAdd(arr) {
    let obj = {
        product: 1,
        sum:0
    }
    for (let i = 0; i < arr.length; i++){
        obj.product *= arr[i]
        obj.sum+=arr[i]
    }
    return obj
}
//console.log(multiplyAndAdd([1, 2, 3, 4]));
//console.log(multiplyAndAdd([5, 5, 5]));
// >>>>>>> main
