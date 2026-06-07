// Task #1
// alert returns underfined
// prompt returns string or null
// confirm returns boolean
// const number  = Number(prompt( "Введіть будь-яке число:" ));
// if (number === 10)
//     alert("Вірно!");
// else
//     alert("Невірно!");
// number === 10 ? alert( "Вірно!" ) : alert( "Невірно!" );

// Task #2
// const min = Math.floor( Math.random() * 59 );

// let quater;
// if ( min < 15 ){
//     quater = "першу";
// } else if ( min < 30 ){
//     quater = "другу";
// } else if ( min < 45 ){
//     quater = "третю";
// } else {
//     quater = "четверту";
// }

// alert(`${min} входить в ${quater} чверть`);

// Task #3
// const number = Number(prompt("Введіть 1, 2, 3 або 4:"));
// let result;
// switch ( number )
// {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'літо';
//         break;
//     case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
// console.log( result );

// Task #4
// const number = Number( prompt( "Введіть будь-яку кількість хвилин" ) );
// let hour = Math.floor(number / 60);
// let minutes = number % 60;
// console.log( `${ String( hour ).padStart( 2, "0" ) }:${ String( minutes ).padStart( 2, "0" ) }` );

// Task #5
// const login = prompt( "Введіть логін:" );
// if ( login === "Адмін" )
// {
//     const password = prompt( "Введіть пароль:" );
//     password === "Я головний" ? alert( "Добрий день!" ) : alert( "Невірний пароль!" );
// }
// else if( login === null || login ==="" )
// {
//     alert( "Скасовано" );
// }
// else
// {
//     alert( "Я вас не знаю" );
// }

// Task #6
// let num = 0;
// while ( num <= 20 )
// {
//     console.log( num );
//     num++;
// }

// Task #7
// const getNumbers = function( min, max )
// {
//     let result=0;
//     let num = max;
//     while ( min < num )
//     {
//         console.log( num );
//         if (num%2===0)
//         {
//             result += num;
//         }
//         num--;
//     }
//     return result;
// }

// console.log(getNumbers (1, 10));

// Task #8
// function min ( a, b )
// {
//     if ( typeof a !=='number' || typeof b !=='number' )
//     {
//         return "Not a number!";
//     }
//     return a < b ? a : b;
// }

// console.log( min( 45, 35 ) );
// console.log( min( "dd", 35 ) );

// Task #9
// const isAdult = ( age ) =>
// {
//     if (age >= 18) {
//         return true;
//     }

//     return confirm('Вам менше 18 років. Ви впевнені, що хочете продовжити?');
// }

//  isAdult(13);

// Task #10
// function fizzBuzz ( num )
// {
//     for ( let i = 1; i <= num; i++ )
//     {
//         if ( i % 5 === 0 && i % 3 === 0)
//         {
//             console.log( `${i} - fizzbuzz`);
//         }
//         else if(  i % 3 === 0 )
//         {
//             console.log( `${i} - fizz` );
//         }
//         else if ( i % 5 === 0 )
//         {
//             console.log( `${i} - buzz` );
//         }
//         else
//         {
//             console.log(`${i}` );
//         }

//     }
// }
// fizzBuzz( 15 );