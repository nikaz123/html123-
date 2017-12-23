(function () {
    `use strict`;


    // Напишите функцию,
    //     которая может принимать неограниченное количество чисел в качестве аргументов, и выводит в консоль только те числа, которые повторяются.
    //     При этом нужно вывести ещё и количество повторений каждого повторяющегося числа.
    //     Пример:
    // printDuplicatedNumbers(1, 34, 67, 1, 5, 34, 1);
    // 1 – 3
    // 34 – 2


    printDuplicatedNumbers(1, 1, 4, 5, 5, 4, 3, 4, 5, 6, 6, 7, 8, 55, 5, 5, 5);



  function printDuplicatedNumbers() {
        let counterArr=[];
        for(let i = 0; i < arguments.length; i++) {
            if (!counterArr[arguments[i]]) {

                counterArr[arguments[i]]=1;
            }
            else {counterArr[arguments[i]]=counterArr[arguments[i]]+1 }
        }

      counterArr.forEach(function (a,index) {




        //for (let a in counterArr) {
            if (a>1)
            {console.log("element " + index + " repeats " + a + " times")}
        });
        return counterArr;
    }




}());