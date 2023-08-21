"use strict"

// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприкндлад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з іексо0 бум де виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const elementNumber = i + 1;
//         console.log(`${elementNumber}=> ${element}`);
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax','Mango', 'Poly', 'Ajax']);

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і
//  ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// let price = 0;
// function calculateEngravingPrice(message, pricePerWord) {
//    const elementArray = message.split(" ")
//    price = elementArray.length * pricePerWord;
//    return price
// }
// // calculateEngravingPrice()
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));

// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок 
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
const longestWords = string.split(" ")
let longestWord = ""
for (const elementWord of longestWords) {
    if (elementWord.length > longestWord.length) {
       longestWord = elementWord;
    }
}
return longestWord
}
console.log(findLongestWord('May the force be with you'));


// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

