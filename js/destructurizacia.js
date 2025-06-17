const obj = {
    name: 'timofii',
    age: 13,
    city: 'kyiv'
}
// // один ыз способыв деструктурізації
// const objName = obj.name;
// const objAge = obj.age;
// const objCity = obj.city;

// console.log(objName);
// console.log(objAge);
// console.log(objCity);

// const {name, age, city} = obj;
// console.log(age);

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

const {make, model, year, features:[item1, item2, item3,],safety:{airbags, antilock_brakes, stability_control}} = car;

console.log(make, model, year, item1,item2,item3, airbags,antilock_brakes, stability_control);

