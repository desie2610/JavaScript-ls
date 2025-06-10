// const user = {
//     name: "tima",
//     age: 13,
//     friends: ['alex', 'egor', 'vasiliy',],
//     lastName: "moiseienko",
// }

// const { use } = require("react");

// // user.city = "London"
// // user.prava = "Admin"

// // user.location = {
// //     city: "london",
// //     country: "England",
// // }

// // console.log(user);
// // console.log(user.home);

// // Присвоїти змінній apartment об'єкт, який описує квартиру з
// // наступними характеристиками:
// //imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// //descr - опис, значення "Spacious apartment in the city center";
// //rating - рейтинг, значення 4;
// //price - ціна, значення 2153;
// //tags - метаінформація, масив ["premium", "promoted", "top"].

// const apartament = {
//     imgUrl:"https://via.placeholder.com/640x480",
//     descr:"Spacious apartment in the city center",
//     reting:"4",
//     price:"2153",
//     tags:["premium", "promoted", "top"]
// }

// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// // з інформацією про власника.Додай йому наступні властивості:
// //name - ім'я власника, значення "Henry";
// //phone - телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.com".

// apartament.owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// }

// const artRating = apartament.reting;
// const aptDescr = apartament.descr;
// const  aptPrice = apartament.price;
// const aptTags = apartament.tags;

// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// // властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// const ownerName = apartament.owner.name;
// const ownerPhone = apartament.owner.phone;
// const ownerEmail = apartament.owner.email;
// const numberOfTags = apartament.tags.length;
// const firstTag = apartament.tags[0];

// console.log(apartament);
// console.log(artRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// console.log(ownerEmail);
// console.log(ownerPhone);
// console.log(ownerName);
// console.log(numberOfTags);
// console.log(firstTag);

// const user = {
//   name: "Timofii",
//   age: 14,
//   city: "kyiv",
//   street: "soloma",
//   house: "46/A",
//   apatment: 345,

//   showName () {

//     return this.name
//   },

// };

// // delete user.name

// console.log(user.showName());

// console.log(user);

const user = {
  parols: "qwerty",
  city: "kyiv",
  name: "timofii",
  age: 14,
  email: "person@gmail.com",
};

// for (const item in user) {
//  console.log('key:',item); // отримаєм ключі
//   console.log('value:',user[item]); // отримаєм значення ключів

// }

//  новий синтаксис

// const key = Object.keys(user)
// console.log(key);

// const value = Object.values(user)
// console.log(value);

// const entries = Object.entries(user)
// console.log(entries);

// for (const item of entries) {
//     console.log(item[0]);

// }

// console.dir(Object)

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// for (const friend of friends) {
//     console.log(friend.online);

// }

// Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// const findName = (userName, array) => {
//   for (const friend of array) {
//     if (friend.name === userName) {
//       return `Ви знайшли ім'я ${userName}`;
//     }
//   }
// };

// console.log(findName("Ajax", friends));
// console.log(findName("Kiwi", friends));
// console.log(findName("Mango", friends));
// console.log(findName("Poly", friends));


// let a = 5; // якщо ми передаємо значення однієї змінної в іншу то в іншій змінні      створюється копія цього значення, тобто присвоєнняя за значенням
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);
// console.log(b === a);

const objA = { // в складних типах данних при передаванні одних значень в іншу передається за посиланням оригінал
  x: 1,
  y: 2,
  z: 3,
}
const objB = objA 
objB.x = 4
console.log(objA);
console.log(objA === objB);

console.log(objB);

const c = 5;
const d = 5;

console.log(c === d);
const qwe = {}
const rty = {}
console.log(qwe === rty);









