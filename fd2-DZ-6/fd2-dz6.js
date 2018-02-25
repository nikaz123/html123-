(function () {
    `use strict`;

//     Создайте класс Grid, который будет автоматически строить html таблицу и автоматически отобразит её на странице.
//         Конструктор должен принимать объект, в котором должны быть следующие свойства:
//
//         • wrapper – элемент или селектор элемента, в который будет вставлена таблица;
//         • columns – массив, который содержит в себе колонки таблицы. Тип элементов массива выберите самостоятельно.
//         • rows – массив, который содержит в себе информацию, которая будет отображена в таблице, один элемент массива – одна строка.
//
//         Тип элементов массива тоже выберите самостоятельно.
//         Возможно, потребуется создать дополнительные классы для отдельных элементов таблицы.
//
//         Таблица должна уметь:
//         o Сортировать строки по клику на отдельной ячейке шапки таблицы, что должно быть отображено визуально на самой ячейке.
//         o Удалять отдельные строки.
//         o Добавлять новые строки в любое место в таблице (учитывая активную сортировку).
//     Старайтесь избегать полной перерисовки таблицы

    let box = document.getElementById(`box`);


    let myObject = {
        wrapper: box,
        columns: [`name`, `dateOfBirth`, `gender`, `Ntel`, `position`],
        rows: [
            [`valya`, `13.04.1981`, `female`, `2581114`, `lead`],
            [`olya`, `29.11.1966`, `female`, `2327964`, `junior`],
            [`kolya`, `09.06.1978`, `male`, `2457964`, `lead`],
        ]

    };

    let arrayRows = Object.getOwnPropertyNames(myObject.rows[0]);    ////это массив

    console.log(arrayRows);


    class Grid {

        constructor(myObject) {


        }

        printPartOfTable() {
            box.innerHTML = ``;
            let table = document.createElement("table");

            let thead = document.createElement("thead");   ////создали шапку таблицы
            let tr = document.createElement('tr');
            table.appendChild(thead);
            thead.appendChild(tr);

            for (let j = 0; j < myObject.columns.length; j++) {
                let td = document.createElement('td');
                td.innerHTML = myObject.columns[j];
                tr.appendChild(td);
                let sortUP = document.createElement("SPAN"),
                    sortDOWN = document.createElement("SPAN");

                sortUP.innerHTML = "&#9650;";
                sortDOWN.innerHTML = "&#9660;";
                sortUP.id = j + `_1`;
                sortDOWN.id = j + `_0`;

                td.appendChild(sortUP);
                td.appendChild(sortDOWN);
            }


            let tbody = document.createElement("tbody");   ///создали тело таблицы

            table.appendChild(tbody);
            box.appendChild(table);

            for (let i = 0; i < myObject.rows.length; i++) {
                tr = document.createElement('tr');


                tbody.appendChild(tr);
                for (let k = 0; k < myObject.rows[i].length; k++) {
                    let td = document.createElement('td');
                    td.innerHTML = myObject.rows[i][k];
                    td.setAttribute("id", i + `` + k);
                    tr.appendChild(td);

                }
                let closeButton = document.createElement(`p`);
                closeButton.innerHTML = `X`;
                closeButton.id = i;
                tr.appendChild(closeButton);
            }


        }

        addRows() {
            let td1 = document.getElementById(`input1`),
                td2 = document.getElementById(`input2`),
                td3 = document.getElementById(`input3`),
                td4 = document.getElementById(`input4`),
                td5 = document.getElementById(`input5`);

            myObject.rows.push([td1.value, td2.value, td3.value, td4.value, td5.value]);

            myGrid.printPartOfTable();

            td1.value = ``;
            td2.value = ``;
            td3.value = ``;
            td4.value = ``;
            td5.value = ``;
        }


        deleteRows(event) {
            let target = event.target;

            if (target.tagName === `P`) {
                let val = target.getAttribute(`id`);

                myObject.rows.splice(val, 1);

                myGrid.printPartOfTable();

            }
        }

        sortColumns(event) {
            let target = event.target;

            let val = target.getAttribute(`id`);

            if (target.tagName === `SPAN` && (val.indexOf(`_`) != -1)) {


                console.log(target.getAttribute(`id`));

                let sortOption = val.split(`_`); /// массив первый элемент номер столбика а втроой как сортировать вверх или вниз

                console.log(event.target);

                function sortFunction0(a, b) {
                    if (a[0] === b[0]) {
                        return 0;
                    }
                    else {
                        return (a[0] < b[0]) ? -1 : 1;
                    }
                }

                function sortFunction1(a, b) {
                    if (a[1] === b[1]) {
                        return 0;
                    }
                    else {
                        return (a[1] < b[1]) ? -1 : 1;
                    }
                }


                function sortFunction2(a, b) {
                    if (a[2] === b[2]) {
                        return 0;
                    }
                    else {
                        return (a[2] < b[2]) ? -1 : 1;
                    }
                }

                function sortFunction3(a, b) {
                    if (a[3] === b[3]) {
                        return 0;
                    }
                    else {
                        return (a[3] < b[3]) ? -1 : 1;
                    }
                }

                function sortFunction4(a, b) {
                    if (a[4] === b[4]) {
                        return 0;
                    }
                    else {
                        return (a[4] < b[4]) ? -1 : 1;
                    }
                }



                if (sortOption[0] === `0`) myObject.rows.sort(sortFunction0);
                if (sortOption[0] === `1`) myObject.rows.sort(sortFunction1);
                if (sortOption[0] === `2`) myObject.rows.sort(sortFunction2);
                if (sortOption[0] === `3`) myObject.rows.sort(sortFunction3);
                if (sortOption[0] === `4`) myObject.rows.sort(sortFunction4);

                if (sortOption[1] === `1`) myObject.rows.reverse();
                       console.log (sortOption[1] );

                myGrid.printPartOfTable();
            }


        }

    }


    let myGrid = new Grid(myObject);

    myGrid.printPartOfTable();


    document.getElementById("addButton").addEventListener("click", myGrid.addRows);

    document.getElementById("box").addEventListener("click", myGrid.deleteRows);

    document.getElementById("box").addEventListener("click", myGrid.sortColumns);


    console.log(myGrid);


}());
