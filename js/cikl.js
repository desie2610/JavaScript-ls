// const name = "Тимофій";
// console.log(name[0]);  //значення по індексу


// const number = 100;
// for(let i = number; i < number; i += 10){
//     console.log(i);
    
// }
// // let i = 0  //Локальна змінна і, = 0 з якого індекса починаєш перебирати.
// // і < 10    //Умова до куда ми перебираємо наш цикл
// // i += 1  //На кожній ітерації додати до лічильника 1


// const name = "javascript";

// for (let i = 0; i < name.length; i += 1) {
//     // console.log(name[i]);
//     console.log(`Індекс елемента ${i}, а значення цього індекса ${name[i]}`);
    
// }




// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i += 1
// }


let message = "";
const ADMIN_PASSWORD = "qwerty";
const password = prompt("Введіть пароль адміністратора: ");

// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'

if (password === null) {
    message = "Скасовано користувачем!";

    // В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'

} else if (password === ADMIN_PASSWORD) { 
    message = "Ласкаво просимо!";}
    // В іншому випадку,

    else (password !== ADMIN_PASSWORD) {
        message = "невірний пароль";}
    
    alert(message)
        