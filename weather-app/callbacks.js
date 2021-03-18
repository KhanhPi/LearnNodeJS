// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 2000)

// const name = ['KhanhPi', 'Quang', 'Van', 'Duc']
// const shortNames = name.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Japan', (data) => {
//     console.log(data);
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        callback(sum)
    }, 2000) 
}    

add(1, 4, (sum) => {
    console.log(sum);
})