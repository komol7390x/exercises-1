let test = ["A", "B", "C", "D", "E"];
let arr = []
let arr2=[]
for (let i = 0; i < test.length; i++){
    for (let k = 0; k < test.length; k++){
        arr2.push(test[i])
    }
    arr.push(arr2)
    arr2=[]
}
console.log(arr;
