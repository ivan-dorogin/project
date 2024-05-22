// Логические операторы

// И - && - Вернет true если все из условий истинны
// ИЛИ - || - вернет true если одно из условий истинно
// НЕ - ! - вернет true если условие ложноподобное

// console.log();

// let a = 1
// let b = 2
// let c = -3 

// if (a > 0 && b > 0 && c > 0){
//     console.log('все числа положительные');
// } else {
//     console.log('есть отрицательные ');
// }

// // задача на возраст с оператором И

// let age = Number(prompt ('введите возраст'))

// if (age < 0 && age <= 13) {
//     console.log('вы ребенок');
// } else if (age > 13 && age <= 18) {
//     console.log('подросток');
// } else if (age > 18) {
//     console.log('взрослый');
// } else {
//     console.log('недопустимое число');
// }

// // // задача светофор с оператором ИЛИ

// const color = 'red' 

// if (color == 'red' || color == 'красный') {
//     console.log('Stop!');
// } else if (color == 'green' || color == 'зеленый') {
//     console.log('Go!');
// } else if (color == 'yellow' || color == 'желтый') {
//     console.log('Warning!');
// } else {
//     console.log('error');
// }

// // // задача

// let data = prompt('введите имя')

// if (!data) {
//     console.log('повторите попытку');
// } else {
//     console.log('Привет' + data);
// }


// // задача 

// let digit = Number(prompt('Введите номер месяца в году'))

// if (digit == 12 || digit == 1 || digit == 2) {
//     console.log('зима');
// } else if (digit == 3 || digit == 4 || digit == 5) {
//     console.log('весна');
// } else if (digit == 6 || digit == 7 || digit == 8) {
//     console.log('лето');
// } else if (digit == 9 || digit == 10 || digit == 11) {
//     console.log('осень');
// }

// // задача на високосный год
// // parseInt - считает только первое число в строке
// // parseFloat - считает только первое число с остатком

// let year = parseInt(prompt('Введите год')) 

// if (year % 4 === 0) {
//     console.log('Високосный');
// } else {
//     console.log('невисокосный');
// }

// // тернарные операторы - способ краткой записи блока условия состоящего из 1 if и else

// // синтаксис:
// // условие (?) действие если true (:) действие если false

// (year % 4 === 0) ? console.log('Високосный') : console.log('невисокосный'); 

// невъебическое сокращение

// console.log(
//     year % 4 === 0
//     ? 'високосный'
//     : 'невисокосный'
// );

// // задача 1

// let numb1 = Number(prompt('введите первое число для сравнения'))
// let numb2 = Number(prompt('введите второе число для сравнения'))

// if (numb1 % 2 === 1 ) {
//     console.log(numb1);
// } else if (numb2 % 2 === 1) {
//     console.log(numb1);
// } else {
//     console.log('условия не выполнены');
// }

// // задача 2 

// let numb1 = Number(prompt('введите первое число для сравнения'))
// let numb2 = Number(prompt('введите второе число для сравнения'))
// let numb3 = Number(prompt('введите третье число для сравнения'))

// let count = 0 

// if (numb1 % 2 === 0 ) {
//     count += 1; 
// } if (numb2 % 2 === 0) {
//     count += 1; 
// } if (numb3 % 2 === 0) {
//     count += 1;
// } 
// console.log(count);

// count +=1 == count++

// принцип выстраивания условий = идти от частного к обобщенному


// let number = parseInt(prompt('введите число от 1 до 100'))

// if (number > 1 && number <= 100) {
//     if (number % 15 === 0) {
//         console.log('FizzBuzz'); 
//     } else if (number % 3 === 0) {
//     console.log(Fizz);
//     } else if (number % 5 === 0) {
//     console.log(Buzz);
//     } else {
//         console.log(number);
//     }
// } else {
//     console.log('Введите число от 1 до 100');
// }



// ввод 3 числа сколько положительные и выведите на экран
let number1 = parseInt(prompt('введите число'))
let number2 = parseInt(prompt('введите число'))
let number3 = parseInt(prompt('введите число'))
let count = 0

if (number1 = true) {
    count++
} if (number2 = true) {
    count++
} if (number3 = true) {
    count++
} 
console.log(count);


