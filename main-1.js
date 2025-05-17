// 1
function minutesToHours(minutes) {
    return minutes / 60
}

// 2
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1 + nr2 + nr3 + nr4) / 4
}


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
        return ""
    }
    console.log(arrayOfStrings);
    let max = arrayOfStrings[0].length;
    let ind = 0
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let len = arrayOfStrings[i].length;
        if (max < len) {
            max = len;
            ind = i;
        }
    }
    return arrayOfStrings[ind]
}
// console.log(getLongestString(["Juneau", "Montgomery","Washington, D.C."]));
// -------------------------------------------------------------------------
// 13
function everyNPositions(message, step) {
    let arr = []
    for (let i = 0; i < message.length; i += step) {
        arr.push(message[i])
    }
    arr = arr.join("")
    return arr
}
// console.log(everyNPositions("Which framework should I choose?",6));
// -------------------------------------------------------------------------
// 14
function doubleNumbers(numbers) {
    // if(arr.length==0){
    //     return []
    // }
    let arr = numbers.map(x => x * 2)
    return arr
}
// console.log(doubleNumbers([2,3,4,5,6,7,9]));
// -------------------------------------------------------------------------
// 15
function mostRepetitions(string1, string2, letter) {
    let obj = {
        str1 : 0,
        str2 : 0
    }
    for (let i = 0; i < string1.length; i++){
        if (letter == letter) {
            obj.str1+=1
        }
    }
    for (let i = 0; i < string2.length; i++) {
        if (letter == letter) {
            obj.str2 += 1
        }
    }
    if (obj.str2 > obj.str1) {
        return string2
    }
    return string1
}
// console.log(mostRepetitions("Los Angeles", "Texas","a"));
// -------------------------------------------------------------------------
// 16
function getMillisecondsBetween(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2)
    let a = d1.getTime() - d2.getTime()
    if (a < 0) {
        return a * (-1)
    }
    return a
}
// console.log(getMillisecondsBetween("Wed Mar 02 2005 15:01:15 GMT+0500","Wed Mar 02 2005 15:00:05 GMT+0500"));
// -------------------------------------------------------------------------
// 17
function getMonthOfTheYear(date) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let a=new Date(date)
    return months[a.getMonth()]
}
// console.log(getMonthOfTheYear("2024-12-25T16:15:00.000Z"));
// -------------------------------------------------------------------------
// 18
function addDays(initialDate, daysCount) {
    let d1 = new Date(initialDate);
    d1.setDate(d1.getDate()+daysCount);
    return d1
}
console.log(addDays("2023-05-01T10:00:00.000Z",35));



