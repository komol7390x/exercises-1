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