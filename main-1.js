function prime(a) {
    if (a == 1 || a == 2) {
        return true
    }
    if (a % 2 == 0) {
        return false
    }
    if (a < 0) {
        return false
    }
    for (let i = 3; i < a; i += 2){
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
        if (a == true) {
            arr.push(i)
        }
    }
    return arr
}
console.log(findPrimes(-11, 20));
// [11, 13, 17, 19]