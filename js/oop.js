// // const objA = {
// //     x: 1
// // }

// // const objB = {
// //     y: 2
// // }

// // const objC = {
// //     z: 3
// // }

// // console.log(objA.x);

// // const objB = Object.create(objA)

// // objB.y = 2

// // // console.log(objB.x);

// // const objC = Object.create(objB)

// // objC.z = 3

// // console.log(objC);



// // 🚗 ЗАДАЧА: Клас Машина і Клас Електромобіль
// // Уявімо, що ми створюємо програму для автосалону. Є звичайні машини, а є спеціальні — електромобілі. Всі вони мають марку (назву) і колір, але електромобілі ще мають рівень заряду батареї.

// // ✅ ВИМОГИ
// // Створити клас Car, який має:

// // публічні властивості brand (марка) і color

// // метод describe() — який описує машину: "Це [brand] кольору [color]"

// // Створити клас ElectricCar, який наслідує Car і додає:

// // приватну властивість #batteryLevel

// // геттер і сеттер для batteryLevel

// // метод charge() — який додає заряд

// // Клас звичайної машини


// //class ключове слово
// // car назва класу
// class Car {
//  constructor(brand, color) {
//  this.brand = brand
//  this.color = color
//  }

// //це метод класу який описує наш автомобіль

//  describe () {
//    console.log(`це ${this.brand} кольору ${this.color}`);
    
//  }
// }
// // наслідує кар
// class ElectricCar extends Car {
//     #batteryLevel; // # ПРИВАТНА ВЛАСТИВІСТЬ оголошуються перед конструктором
//     constructor(brand,color,batteryLevel) {
//         super (brand,color) // стягуємо параметри з кару
//         this.#batteryLevel = batteryLevel
//     }

// get batteryLevel() {
//    return this.batteryLevel

// }

// set batteryLevel(level) {
// if(level < 0 || level >100) {
//     console.log('рівень заряду не можливий');
    
// } else (this.#batteryLevel = level)
// }

// charge (value) {
//     this.#batteryLevel += value

// }

// }


// const lamborgini = new Car ('lamborgini', 'токсично фіолетовий')

// lamborgini.describe()

// const tesla = new ElectricCar ('Tesla', 'white', 100)

// tesla.describe()


