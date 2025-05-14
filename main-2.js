function fibonacciFizzBuzz(n) {
    let a = 0;
    let b = 1;
    let arr = []
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = a + b;
        b = a;
        a = sum;
        arr.push(sum)
    }
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            arr2.push("FizzBuzz")
        }
        else if (arr[i] % 3 == 0) {
            arr2.push("Fizz")
        }
        else if (arr[i] % 5 == 0) {
            arr2.push("Buzz")
        } else {
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(fibonacciFizzBuzz(7));
console.log(fibonacciFizzBuzz(10));

