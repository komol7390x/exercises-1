// 1
function minutesToHours(minutes) {
    return minutes / 60
}

export { minutesToHours };

// 2
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1 + nr2 + nr3 + nr4) / 4
}

export { averageOf4Numbers };

// 3
function concat3(string1, string2, string3, separator) {
    let arr = []
    arr.push(string1);
    arr.push(string2);
    arr.push(string3);
    let arr1 = arr.join(separator)
    return arr1
}

// -------------------------------------------------------------------------
// 4
function getMonthsNeededToWait(index1, index2) {
    if (index1 < index2) {
        return index2 - index1
    } else {
        return 12 - (index1 - index2)
    }
}
// console.log(getMonthsNeededToWait(11, 0));

// -------------------------------------------------------------------------
// 6
function getGasolineAmount(distance, consumptionPer100Km) {
    return (distance / 100) * consumptionPer100Km
}
// console.log(getGasolineAmount(160,6.4));

function lastNRevert(text, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        console.log;
        arr.push(text[(text.length - 1) - i])
    }
    arr = arr.join("")
    return arr
}
// console.log(lastNRevert("Salom Dunyo", 3));

// -------------------------------------------------------------------------
// 7
function getBusinessAddress(business) {
    return `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`
}

let obj = {
    address: { number: 3, street: "Avenuepark", zipCode: 123500 },
    name: "100 Functions ltd."
}
// console.log(getBusinessAddress(obj));

// -------------------------------------------------------------------------
// 8
function getUserObject(firstName, lastName, age) {
    return {
        age: age,
        name: `${firstName} ${lastName}`
    }
}
// console.log(getUserObject("Komol", "Parpixodjayev", 27));
// -------------------------------------------------------------------------

// 9
function canDriveCar(user, car) {
    if (user.age >= 18 || car.engineSize < 1000) {
        return true
    }
    return false
}
// -------------------------------------------------------------------------

// 10
function areAllNumbersEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            return false
        }
    }
    return true
}
// -------------------------------------------------------------------------

// 11

function getBiggestNumberInArrays(numbers1, numbers2) {
    let first = Math.max(...numbers1);
    let second = Math.max(...numbers2)
    if (first > second) {
        return first
    } else {
        return second
    }
}
// console.log(getBiggestNumberInArrays([1,2,3,4,5],[7,8,9]));

// -------------------------------------------------------------------------
// 12

function getLongestString(arrayOfStrings) {
    if (arrayOfStrings.length == 0) {
        return []
    }
    let index
    let max = arrayOfStrings[0].toString().length
    for (let i = 1; i < arrayOfStrings.length; i++) {
        let a = arrayOfStrings[i].toString().length
        if (a > max) {
            max = a
            index = i
        }
    }
    return arrayOfStrings[index]
} console.log(getLongestString([21, 2, 34,]));




