// перебираючий метот map він повертає такий же масив (кількість) як і оригінальний й засовує в новий

// const numbers = [1,2,3,4,5,6,7,8,9]
// const result = numbers.map((item) => item*2)

// console.log(result);

// const people = [
//     {age: 15, name: 'тимофій'},
//     {age: 14, name: 'тимофій'},
//     {age: 13, name: 'тимофій'},
//     {age: 12, name: 'тимофій'},
// ]

// const res = people.map((item) => item.age + 10)
// console.log(res);

// const result = people.map((item) => item.name)
// console.log(result);

// перебираючий метот фільтр перебираэ масив до кожного елементу масиву застосовує колл бек функцію повертає новий масив в який додає елементи які призводяться до true

// const people = [
//     {age: 15, name: 'тимофій', isactive: true},
//     {age: 14, name: 'тимофій', isactive: true},
//     {age: 13, name: 'тимофій', isactive: false},
//     {age: 12, name: 'тимофій', isactive: false},
// ]

// const res = people.filter((item) => item.age > 12).map((item) => item.name)
// console.log(res);

// const filtresactive people.filter((a) => a.isactive).map((b) => b.city)


// const people = [
//   { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
//   { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
//   { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
//   { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
//   { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
//   { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
//   { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
//   { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
//   { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
//   { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро"] }
// ];

// const result = people.filter((item) => item.points > 100).map((item) => item.name)

// console.log(result

// );


// const res = people.filter((item) => item.friends.includes('Марія')).map((item) => item.name)
// console.log(res);


// const numbers = [1,2,3,4,5,6]
// const totalNumbers = numbers.reduce((acumulator, num) => acumulator += num,0)
// console.log(totalNumbers);

// const students = [
//   { name: "Anna", age: 20, gender: "female", grade: 85 },
//   { name: "Ivan", age: 22, gender: "male", grade: 90 },
//   { name: "Olena", age: 19, gender: "female", grade: 78 },
//   { name: "Petro", age: 21, gender: "male", grade: 92 },
// ];

// const totalGrade = students.reduce((acc, item) => acc += item.grade,0)
// console.log(totalGrade);


//порахувати загальну зарплату
const salary = {
  mango: 30,
  poly: 40,
  ajax: 50,
}

const res = Object.values(salary).reduce((acc, item) => acc += item,0)
console.log(res);







