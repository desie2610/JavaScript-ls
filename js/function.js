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

