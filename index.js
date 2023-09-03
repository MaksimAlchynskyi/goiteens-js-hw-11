"use strict"

// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприкндлад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з іексо0 бум де виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const elementNumber = i + 1;
        console.log(`${elementNumber}=> ${element}`);
    }
}
logItems(['Mango', 'Poly', 'Ajax','Mango', 'Poly', 'Ajax']);

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і
//  ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
let price = 0;
function calculateEngravingPrice(message, pricePerWord) {
   const elementArray = message.split(" ");
   price = elementArray.length * pricePerWord;
   return price
}
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));

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

function formatString(string) { 
    if (string.length < 40) {
return string
    } else {
     return string.slice(0, 40) + "..."
      
    }
}
console.log(formatString('ак от, усі людські пристрасті , розпалені зіткненнями інтересів у вашому нинішньому суспільстві, проходять переді мною, і я влаштовую їм огляд, а сам живу спокійно.'));

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє
//  її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених 
// слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.


function checkForSpam (message, _messageone, _messageTwo, _messageThree) {
    const checkMessage = message.toLowerCase();
    if (checkMessage.includes('spam') || checkMessage.includes('sale')) {
      return true;
    }
    return false;
  };
  console.log(checkForSpam("Це повідомлення без заборонених слів."));
  console.log(checkForSpam("Це повідомлення з словом sale."));
  console.log(checkForSpam("Це повідомлення з словом spam."));


// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві
//  пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення чиcла користувачем і збереження в масив триває 
// до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, 
// якщо масив не порожній, необхідно порахувати суму всіх елементів
//  масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль 
// виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а 
// не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з 
// текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив
//  чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


let input;

let numbers = [];
 
let total = 0;

function promptTotalNumbers() {
    do {
        let promptNumbers = prompt("Введіть число")
        input = Number(promptNumbers)

        console.log(input);

            if (input) {
                numbers.push(input)
                console.log(numbers);
            }
            if (Number.isNaN(input)) {
                alert("це не число, введіть ща раз.")
            }
    } while (promptNumbers);
    for (const number of numbers) {
        total += number
    }
    console.log(`Всі числа дорівнюють: ${total}`);
}

promptTotalNumbers()