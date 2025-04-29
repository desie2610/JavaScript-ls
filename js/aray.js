// const friends = ["artem", "anton", "david", "oleksander", "timofii", "yaroslav", "daria", "katya"]
// console.log(friends[friends.length-1]);
// friends[friends.length-1] = "timur";
// console.log(friends.length);
// friends[15] = "unkown";
// console.log(friends[10]);
// console.log(friends.length);


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     if (element % 2 === 0) {
//         sum += element
//     }
// }
// console.log(sum);

// const aray = [['a', 'b', 'c'], ['d', 'e', 'f']]
// console.log(aray[0]);
// console.log(aray[1][0]);

// for (let i = 0; i < aray.length; i += 1) {
//     console.log(i);
    
// }


// const friends = ["artem", "anton", "david", "oleksander", "timofii", "yaroslav", "daria", "katya"]
// const findName = 'oleksander';

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);
//        if (friends[i] === findName) {
//        console.log(`Вашого друга ${friends[i]} знайдено під індексом ${i}`);
//                 break
//      }
//  }

// }


// const number = ["0951234567", "0683223195", "050459566", "0723222454"]
//     for (let i = 0; i < number.length; i +=1) {
//         console.log(number[i].length);
        
        

//          if (number[i].length < 10) {
//             console.log(`Номер телефону ${number[i]} не дійсний!`);
            
//          }
//     }



const number = ["0951234567", "0683223195", "0504595669", "0723222454"]
for(let i = 0; i < number.length; i += 1) {
    console.log("+38" + number[i] );
    
}
  
