// https://www.100jsfunctions.com/exercises/arrayToObject
//1
"use strict"
function arrayToObject(strings) {
    let obj = {}
    for (let [key, val] of Object.entries(strings)) {
        if (!(key in obj)) {
            obj[val]=+key
        }
    }
    return obj
}
// console.log(arrayToObject(["JavaScript", "is", "awesome"]));
// ---------------------------------------------------------------------
// 2
function pickFields(data, fields) {
    let obj={}
    for (let [key, val] of Object.entries(data)) {
        if (fields.includes(key)) {
            obj[key]=val
        }
    }
    return obj
}
// console.log(pickFields({ "color": "blue", "name": "Earth", "solarSistem": "Milky Way" }, ["name", "color"]));
// ---------------------------------------------------------------------
// 3
function getHighestPaidEmployee(employees, departmentId) {
    const res = employees.filter(e => e.departmentId === departmentId);
    if (res.length === 0) return undefined;
    const max = Math.max(...res.map(e => e.salary));
    const result = res.find(e => e.salary === max);
    return result.name; 
}
const obj = [{ "departmentId": "A110", "name": "Alice", "salary": 7611 },
    { "departmentId": "A110", "name": "Bob", "salary": 9288 },
    { "departmentId": "A504", "name": "Charlie", "salary": 4109 },
    { "departmentId": "A504", "name": "David", "salary": 6100 }]
// console.log(getHighestPaidEmployee(obj, "A504"));
// ---------------------------------------------------------------------
// 4

const people = {
    bob: "JS Developer",
    alice: "AI Engineer",
    jon: "JS Developer",
    nick: "UX Designer",
};
function flipObject(p1) {
    let obj = {};
    for (let [key, val] of Object.entries(p1)) {
        if (!(obj[val])) {
            obj[val]=[key]
        } else {
            obj[val].push(key)
        }
    }
    return obj
}
// console.log(flipObject(people));
// ---------------------------------------------------------------------
// 5
function diffArrays1(numbers1, numbers2) {
    let arr1 = numbers1.filter(x => !(numbers2.includes(x)))
    let arr2 = numbers2.filter(x => !(numbers1.includes(x)))
    let arr3=arr1.concat(arr2)
    return arr3
}
function diffArrays2(numbers1, numbers2) {
    let obj = [];
    for (let i = 0; i < numbers1.length; i++){
        if ((!(obj.includes(numbers1[i])) && (!(numbers2.includes(numbers1[i]))))) {
            obj.push(numbers1[i])
        }
    }
    for (let i = 0; i < numbers2.length; i++) {
        if ((!(obj.includes(numbers2[i])) && (!(numbers1.includes(numbers2[i]))))) {
            obj.push(numbers2[i])
        }
    }
    return obj
}
// console.log(diffArrays1([11, 96, 103, -5, 0, 12, 1], [0, 1, 2, 3, 4, 5]));
// console.log(diffArrays2([11, 96, 103, -5, 0, 12, 1], [0, 1, 2, 3, 4, 5]));
//[11,96,103,-5,12,2,3,4,5]
// ---------------------------------------------------------------------
// 6
function countPageViews(pageViews, country, interval) {
    let end = new Date(interval.endDate)
    let start = new Date(interval.startDate)
    let arr = pageViews.filter(x => x.country == country)
    let sum = arr.filter(x => new Date(x.date) >= start && new Date(x.date)<=end).reduce((acc,val)=>acc+val.count,0)
    return sum
}
let obj1 = [
    { "date": "2023-05-10T10:00:00.000Z", "country": "RO", "count": 104 },
    { "date": "2023-05-05T10:00:00.000Z", "country": "USA", "count": 151 },
    { "date": "2023-05-07T10:00:00.000Z", "country": "RO", "count": 67 },
    { "date": "2023-05-10T10:00:00.000Z", "country": "CA", "count": 89 },
    { "date": "2023-05-12T12:00:00.000Z", "country": "RO", "count": 500 }]

let interval = {
    "endDate": "2023-05-12T10:00:00.000Z",
    "startDate": "2023-05-01T10:00:00.000Z"
}
// console.log(countPageViews(obj1, "RO",interval));
// ---------------------------------------------------------------------
// 7
function linkedNumbersSum(node) {
    let sum = 0;
    while (node!=null) {
        sum += node.value;
        node=node.last
    }
    return sum
}
let arr4 = { "last": { "last": { "last": null, "value": 3 }, "value": 2 }, "value": 1 }
// console.log(linkedNumbersSum(arr4));
// ---------------------------------------------------------------------
// 8
function removeFirstAndLast1(source = "", target) {
    let arr2 = source.replace(target, "");
    let target2 = target.split("").reverse().join("");
    arr2 = arr2.split("").reverse().join("");
    console.log(arr2);
    arr2 = arr2.replace(target2,"").split("").reverse().join("");
    return arr2;
}
function removeFirstAndLast(source = "", target) {
    let first = source.replace(target, "");
    let lastIndex = first.lastIndexOf(target);
    if (lastIndex === -1) {
        return first;
    }
    return first.slice(0, lastIndex) + first.slice(lastIndex + target.length);
}
console.log(removeFirstAndLast1("I like to code in JavaScript. It's a nice language!", "e "));



