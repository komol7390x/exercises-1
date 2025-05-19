// https://www.100jsfunctions.com/exercises/arrayToObject
//1
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

console.log(getHighestPaidEmployee([{ "departmentId": "A110", "name": "Alice", "salary": 7611 },
    { "departmentId": "A110", "name": "Bob", "salary": 9288 },
    { "departmentId": "A504", "name": "Charlie", "salary": 4109 },
    { "departmentId": "A504", "name": "David", "salary": 6100 }], "A504"));

