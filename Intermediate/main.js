// https://www.100jsfunctions.com/exercises/arrayToObject
//1
function arrayToObject(strings) {
    let obj={}
    for (let [key, val] of Object.entries(strings)) {
        obj[val]=key
    }
    return obj
}
console.log(arrayToObject(["JavaScript", "is", "awesome"]));

