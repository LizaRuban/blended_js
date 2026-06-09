// Task #1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код
// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push( 'rock-n-roll' );
// let index = styles.indexOf( 'blues' );
// styles[ index ] = 'classic';
// // index - по якому індексу відаляємо, 1-скільки елементів видаляємо, 'classic' - що добавляємо
//styles.splice(index, 1, 'classic');
// console.log( styles );
// function logItems ( array )
// {
//     for ( let i = 0; i < array.length;  i++)
//     {
//         console.log(`${i+1}-${array[i]}`);
//     }
// }
// console.log( logItems(styles) );

// Task #2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin ( array )
// {
//     const name = prompt( "Введіть ім'я:" );
//     array.includes( name ) ? alert( `Hello ${ name }` ) : alert("User not found");
// }

// checkLogin(logins);

// Task #3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// arguments - псевдомасив
// в звичайних функціях JavaScript автоматично створює об'єкт arguments
// function caclculateAverage ()
// {
//     let sum = 0;
//     let count = 0;
//     for ( let i = 0; i<arguments.length; i++)
//     {
//         if ( typeof arguments[ i ] === 'number' )
//         {
//             sum += arguments[ i ];
//             count++;
//         }
//     }
//     return sum / count;
// }

// function caclculateAverage ()
// {
//     let sum = 0;
//     let count = 0;
//     for (const number of arguments)
//     {
//         if ( typeof number === 'number' )
//         {
//             sum += number;
//             count++;
//         }
//     }
//     return count!==0 ? sum / count : 0;
// }

// console.log(caclculateAverage (1,2,47,8, 'Peter', [1,2],5,null));

// Task #4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [ 22, 11, 34, 5, 12, 13, 14, 15 ];
// function sumNeighbors(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         result.push(arr[i] + arr[i + 1]);
//     }

//     return result;
// }

// console.log( sumNeighbors( someArr ) );

// Task #5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber ( numbers )
// {
//     if ( Array.isArray( numbers ) )
//     {
//         let min = numbers[ 0 ];
//         for ( const number of numbers )
//         {
//             if ( number < min )
//             {
//                 min = number;
//             }
//         }
//         return min;
//     }
//     else
//         {
//             console.log( 'Sory, it is not an array!' );
//         }
// }

// console.log(findSmallestNumber(numbers));

// Task #6
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord ( string )
// {
//     const arrayOfWords = string.split( " " );
//     let longestWord = arrayOfWords[ 0 ];
//     for (const word of arrayOfWords  )
//     {
//         if (longestWord.length < word.length)
//         {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord("London is the capital of Great Britain"));

// Task #7
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (let key of keys )
// {
//     console.log(`${key}:${user[key]}`);
// }

// Task #8
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  
// function SumOfSalaries (salaries)
// {
//     let sum = 0;
//     const values = Object.values( salaries );
//     for (let value of values)
//         {
//             sum += value;
//         }
//     return sum;
// }
  
// console.log(SumOfSalaries (salaries));

// Task #9
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read( a, b ){
//         this.a = a;
//         this.b = b;
//     },

//     sum(){
//         if ( this.exist() )
//         {
//             return this.a + this.b;
//         }
//         return 'No such properties';
//     },

//     mult ()
//     {
//         if ( this.exist())
//         {
//             return this.a * this.b;
//         }
//         return 'No such properties';
//     },

//     exist ()
//     {
//         return typeof this.a === 'number' &&
//            typeof this.b === 'number';
//     }
// }

// calculator.read(11);
// console.log( calculator );
// console.log( calculator.sum() );
// console.log( calculator.mult() );

// Task #10
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice ( fruits, fruitName )
// {
//     let total = 0;
//     for ( const fruit of fruits )
//     {
//         if ( fruit.name === fruitName )
//         {
//             total += fruit.price * fruit.quantity;
//         }
//     }
//     return total;
// }

// console.log(calcTotalPrice ( fruits, "Яблуко" ));
// console.log(calcTotalPrice ( fruits, "Банан" ));

// // Task #11
// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
  
// // Збільшуємо кількість годин гравця за id
// const playerId = "player-3";

// const updatedPlayers = players.map(player => {
//     //player-3 === "player-3"
//     if(player.id === playerId) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }

//     return player
// } )

// console.table(updatedPlayers);

// Additional task
// Додатково, якщо все зробили або хочеться ще, можна дати цю задачу:
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

const phonebook = {
    contacts: [],

    add ( data )
    {
        const contact = {
            category: "default",
            ...data,
            id: this.generateId(),
            createdAt: this.getDate(),
        };
        this.contacts.push( contact );
    },

    list ()
    {
        console.table( this.contacts );
    },

    filtered ( category )
    {
        const result = [];
        for ( const contact of this.contacts )
        {
            if ( contact.category === category )
            {
                result.push( contact );
            }
        }
        return result;
    },

    delete ( name )
    {
        for ( let i = 0; i < this.contacts.length; i += 1 )
        {
            if ( this.contacts[ i ].name === name )
            {
                this.contacts.splice( i, 1 );
                return;
            }
        }
    },

    updateName ( oldName, newName )
    {
        for ( const contact of this.contacts )
        {
            if ( contact.name === oldName )
            {
                contact.name = newName;
                return;
            }
        }
    },

    generateId ()
    {
        return "#" + Math.random().toString( 36 ).substr( 2, 9 );
    },

    getDate ()
    {
        return Date.now();
    },
};

phonebook.add( {
    name: "Mango",
    email: "mango@mail.com",
    category: "friends",
});

phonebook.add( {
    name: "Poly",
    email: "poly@hotmail.com",
} );
    
phonebook.add( {
    name: "Katy",
    email: "katy@hotmail.com",
    category: "friends",
} );

phonebook.delete("Mango");
phonebook.updateName("Poly", "Sara");
console.log(phonebook.filtered("friends"));
phonebook.list(); 