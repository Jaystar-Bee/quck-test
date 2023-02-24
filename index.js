
// console.log("My first Implementation structre")
// const firstText = "hello world hello"

// const firstArr = firstText.split(" ")
// let worldArr = []

// firstArr.forEach((element) => {
//     if (worldArr.length === 0) {
//         worldArr.push({ name: element, quantity: 1 })
//         return
//     }
//     for (i = 0; i <= worldArr.length; i++) {
//         if (worldArr[i].name === element) {
//             worldArr[i].quantity += 1
//         } else {
//             worldArr.push({ name: element, quantity: 1 })
//         }
//         break;
//     }
// })

// console.log(worldArr)


console.log("---------------------------------")

console.log("My Second Implementation structre")

const secondText = "hello world time hello time"

const secondArr = secondText.split(" ")
let resultArr = []
let isFound = false

for (j = 0; j < secondArr.length; j++) {
    if (resultArr.length === 0) {
        resultArr.push({ [secondArr[j]]: 1 })
        continue
    }

    for (i = 0; i < resultArr.length; i++) {
        if (resultArr[i].hasOwnProperty(secondArr[j])) {
            // console.log(resultArr[i])
            const oldVal = resultArr[i][secondArr[j]]
            // console.log(oldVal)
            resultArr[i] = { [secondArr[j]]: oldVal + 1 }
            isFound = true
            break;
        }
    }
    if (!isFound) {
        console.log("not found")
        resultArr.push({ [secondArr[j]]: 1 })
        isFound = false
    }
}

console.log(resultArr)
