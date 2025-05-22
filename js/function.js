// // оголошення функції function declaration

// function showMessage ()
//  {
//     const message = "hello world"
//     return message
//  }



// function expretion
// const showMessage = function () { 
//     const message = "hello world"
//     return message}



// const showMessage = function (name = "anton", str) { 
//     console.log(str);
//     const message = `hello world  ${str} ${name}`
//      console.log(name);
//     return message
   
    
// }

// // name це параметри функції 
// //виклик функції
// const string = "Передає привіт"
// const res = "З вами прощається"
// console.log(showMessage("David", string)); //David це передача аргументів у функцію
// console.log(showMessage("Oleksandr", res));
// console.log(showMessage("Daria", "рада всіх вітати!"));
 
// const convertedMessage = function(text) {
//     // const upperText = text.toUpperCase()
//     // return upperText
//     return text.toUpperCase()
// } 

// const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed rerum, commodi, quisquam rem vitae impedit iusto neque tempora, aspernatur voluptatem nam expedita debitis officia. Quam accusamus temporibus corporis id.";
// console.log(convertedMessage(message));


// const number = function (numberOne, numberTwo) {
   
//     return numberOne + numberTwo
// }

// console.log(number(4, 2));

// const sumNumber = function (aray) {
//     console.log(aray);
//     let sum = 0;
//     for (let i = 0; i < aray.length; i += 1) {
//         sum += aray[i]
        
//     }
//   return sum
    
// }

// console.log(sumNumber([1,2,3,4,5]));



// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// const logItems = function (array) {
//     // console.log(array);
    
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i+ 1} - ${array[i]}`);
        
//     }
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));

// const show = (...arg) => {
//     console.log(arg);
    
// }

// console.log(show(1, 2, 3, 4, 5));



// const calculator = (a, b, callback) => {
//     console.log(callback);
    
//     return callback(a, b)
// }

// // console.log(sunNum(1,2));
// const sumNum = (a,b) => {
//     return a + b;
// }

// const minus = (a,b) => {
//     return a - b;
// }
// console.log(calculator(10,2, sumNum));


// const multiplyArray = (array, number, callback) => {
//     console.log(array);
//     console.log(number);
//     console.log(callback);
//     const result = [];
//     // for(let i = 0; i < array.length; i += 1) {
//     //     result.push(callback(array[i], number));
//     // }
//     for(const elem of array) {
//         result.push(callback(elem, number));
//     }
//     return result;
// }

// const multiply = (a, b) => a*b;
// const arr = [1, 4, 6, 10, 5];
// const num = 3;
// console.log(multiplyArray(arr, num, multiply));


// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const arr = [1, 2, 3, 4, 5]

const processArray = (array, callback) => {
    return callback(array)
   
}

const plusNum = (arr) => {
     let res = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        res += element
    }
    return res;
}

const minNum = (arr) => {
 let min = arr[0]
 
}

console.log(processArray(arr,plusNum));
console.log(processArray(arr, minNum));

