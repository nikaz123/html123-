(function () {
    `use strict`;

    // Напишите функцию, которая принимает любое количество аргументов, 
    // среди которых последний является строкой, а все остальные – числами. 
    // Например:  yourFunction(2, 5, 4, 6, 15, `Каhл у Клары украл кораллы`);
    // Функция должна вывести строку в консоль отдельными словами (разделителем слов считать символ пробела).
    // Каждое слово должно быть выведено через соответствующее количество секунд. 
    // В примере выше первое слово будет выведено через 2 секунды, второе через 5, третье через 4 и т.д.
    // Если слов в строке меньше чем чисел, то лишние числа просто игнорируются.
    // Если слов больше чем чисел, то последнее число используется для всех оставшихся слов.

myFn(5000, 1000, `dom din don mmmmm`);

    function myFn () {

        let textArg = arguments[arguments.length-1], // выделяем последний аргумент-строку

           indexLastDelay = arguments.length-2,      // последний номер обозначающий задержку

        textArray = textArg.split(` `);              // делаем массив слов из строки



        let delay=0,

            lastDelay=0;


        for (let i=0; i<textArray.length; i++) {

             if (i<=indexLastDelay) {lastDelay = arguments[i]}



              delay=delay+lastDelay;

        setTimeout (function() { console.log(textArray[i]) }, delay);


        }

            }


}());