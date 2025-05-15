// // 1
// function minutesToHours(minutes) {
//     return minutes / 60
// }

// export { minutesToHours };

// // 2
// function averageOf4Numbers(nr1, nr2, nr3, nr4) {
//     return (nr1 + nr2 + nr3 + nr4) / 4
// }

// export { averageOf4Numbers };

// // 3
// function concat3(string1, string2, string3, separator) {
//     let arr = []
//     arr.push(string1);
//     arr.push(string2);
//     arr.push(string3);
//     let arr1 = arr.join(separator)
//     return arr1
// }

// export { concat3 };

// // 4
// function getMonthsNeededToWait(index1, index2) {
//     if (index1 < index2) {
//         return index2 - index1
//     } else {
//         return 12 - (index1 - index2)
//     }
// }

// export { getMonthsNeededToWait };

// // 6
// function getGasolineAmount(distance, consumptionPer100Km) {
//     return (distance / 100) * consumptionPer100Km
// }

// export { getGasolineAmount };

function lastNRevert(text, n) {
    let arr = [];
    for (let i = 0; i<n; i++) {
        console.log;
        arr.push(text[(text.length - 1) - i])
    }
    arr=arr.join("")
    return arr
} console.log(lastNRevert("Jon Doe",3));

