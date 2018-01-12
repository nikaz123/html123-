// Найдите все года от 0 до 2017, сумма цифр которых равна 13.
// Для этого создайте вспомогательную функцию getNumbersSum, которая параметром будет принимать число и возвращать сумму
// цифр этого числа.

//
// (function () {
//     `use strict`;
//
//
//     for (let j=0; j<=2017; j++) {
//         if (getNumbersSum(j)===13) {console.log(j)}
//     }
//
//     function getNumbersSum (number) {
//         let numberString = String(number);
//         let stringArray = numberString.split(``),
//             sum = 0;
//
//         for (let i=0; i<stringArray.length; i++) {
//
//             sum = sum+Number.parseInt(stringArray[i]);
//         }
//
//         return sum;
//
//     }
//
//
// }());
//
//
//
// // Дана строка вида 'var_text_hello'. Сделайте из неё текст 'varTextHello'.
//
//
// (function () {
//     `use strict`;
//
// let str = 'var_text_hello',
//
// strArray = str.split(`_`);
//
// for (let i=1; i<strArray.length; i++) {
//      strArray[i] = strArray[i][0].toUpperCase()+strArray[i].substring(1);
// }
//     console.log(strArray.join(``));
// }());
//



// Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9].
//     Сделайте функцию, которая будет разбивать его в двухмерный массив.
//     Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве.
//     Например, так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) мы получим [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
//     а так func([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) мы получим [[1, 2], [3, 4], [5, 6], [7, 8], [9]].
//
// (function () {
//     `use strict`;
//
// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9];
// let number = 2;
//
// console.log(newArr(arr,number));
//
//     function newArr (arr, number) {
//         let arrNew = [[]],
//             x = 0,
//             y =0;
//
//         for (let i=0; i<arr.length; i++) {
//
//              arrNew [y].push(arr[i]);
//              x=x+1;
//              if (x>=number) {
//                  x = 0;
//                  y=y+1;
//                  arrNew.push([]);
//
//              }
//
//         }
//
//         return (arrNew);
//     }
//
//
//
// }());
//







// Создать массив произвольной длины (размер массива определяется случайно).
// Заполнить массив произвольными целыми числами в диапазоне от 0 до 100.
// Вывести полученный массив в консоль. Отсортировать массив от большего к меньшему.
//     Вывести полученный массив в консоль.
// (function () {
//     `use strict`;
//
//     let lenghtRandom = Math.round(Math.random()*100);
//     console.log(lenghtRandom);
//     let arr = [];
//     for (let i=0; i<lenghtRandom; i++) {
//        arr.push(Math.round(Math.random()*100));
//
//     };
//
//     console.log(arr.toString());
//
//     let sort = true;
//
//     while (sort ) {
//
//         sort = false;
//
//         for (let j = 0; j < lenghtRandom; j++) {
//             if (arr[j + 1] > arr[j]) {
//
//                 let x = arr[j];
//                 arr[j] = arr[j + 1];
//
//                 arr[j + 1] = x;
//
//            sort = true;
//
//             }
//
//         }
//     };
//
//
//     console.log(arr);
//
// }());



// learnjs https://learn.javascript.ru/array-methods  первая задача

// (function () {
//     `use strict`;
///
//     let obj = {
//         className: 'open menu'
//     }
////
//     addClass(obj, `new`);
//
////     function addClass(objParam, cls) {
//
//        let arr = objParam.className.split(` `);
//
//         let flag = false;
//
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === cls) {
//                 flag = true;
//             }
//
//         };
//
//
//         if (flag == true) {
//         }
//
//         else {
//             arr.push((cls));
//            let objNew = arr.join(` `).trim();
//             objParam.className = objNew;
//         }
//         ;
//
//
//         return
//
//     }
// }());


//заполнить массив длиной 10 случайными числами от 1 до 10 и вывести в консоль


// (function () {
//     `use strict`;
//
//
//
//  let arr = new Array(10);
//
//
//  for (let i=0; i<arr.length; i++) {
//      arr[i] = Math.round(Math.random()*10);
//
//
//
//  };
//
//     console.log(arr);
//
//
//
// } ());


//задача 2 - заполнить массив строк месяцами года и вывести все заканчивающиеся на мягкий знак

// (function () {
//     `use strict`;
//
//
// let arr = [`январь`, `февраль`, `март`, `апрель`, `май`, `июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`],
//     arrNew = [];
//
// for (let i=0; i<arr.length; i++) {
//
//    if (arr[i].slice(-1)===`ь`) {
//
//        arrNew.push(arr[i]);
//    }
//
//
// };
//     console.log (arrNew);
//
//


/// задача 3 - заполнить массив значений функции cos(x) 0...2pi  сеткой 10 миллионов. во время рассчета выводить проценты в консоль от 0 до 100.
//
// (function () {
//   `use strict`;
//
//     let arr = new Array(10000000);
//
//     for (let i=0; i<arr.length; ) {
//
//         arr[i]= Math.cos(x);
//
//
//     }
//
//
// } ());





/////задачка 4 - змейка, заполнить произвольно заданный двухмерный массив змейкой
(function () {
    `use strict`;

    let n = Math.round(Math.random()*100), m = Math.round(Math.random()*100);

    let arr = [], k=0;

    for (let i = 0; i < m; i++){

        arr[i] = [];



        for (let j = 0; j < n; j++){

            k++;

            arr[i][j] =k; // Math.round(Math.random()*10);

        }}


        

    console.log(arr);



} ());



