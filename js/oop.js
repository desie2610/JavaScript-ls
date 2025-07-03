const objA = {
    x: 1
}

// const objB = {
//     y: 2
// }

// const objC = {
//     z: 3
// }

// console.log(objA.x);

const objB = Object.create(objA)

objB.y = 2

// console.log(objB.x);

const objC = Object.create(objB)

objC.z = 3

console.log(objC);

