(function () {
    `use strict`;
    //
    // Создайте страницу, на которой есть две зоны.
    // В первой зоне пользователь может добавлять уникальные теги,
    // т.е. существует текстовое поле, куда пользователь вводит название тега,
    // а под этим полем отображаются все эти теги в алфавитном порядке, напротив каждого тега есть кнопочка с крестиком, кликнув по которой тег исчезает из списка.
    // Создать два одинаковых тега нельзя. Примерно так:
    //
    //     Во второй зоне расположено текстовое поле, в котором можно выбирать несколько тегов из списка добавленных.
    // Во время ввода, под текстовым полем появляется список тех тегов, которые включают в себя набранный текст (автодополнение).
    // По нажатию на Enter, или после выбора тега из списка, набранный тег записывается под текстовым полем.
    // При попытке ввода следующего тега, выбранные уже не появляются в списке автодополнения.
    //
    //

    let setTag = new Set();

    function addTag() {
        let editInput = document.getElementById("editFild"); //функция добавляет введенные слова в set
        let val = editInput.value;
        setTag.add(val);
        printTag(setTag);

        editInput.value = ``; ////  ОЧищается поле ввода текста
    }


    function printTag(pSet) {                  ////создается набор тегов p на странице. в каждом теге слово из setTag


        let printBlock1 = document.getElementById("printBlock1");

        printBlock1.innerHTML = '';       // надо удалить все потомки в диве


        for (let item of Array.from(setTag).sort()) {   //////////из set сделлаи массив чтобы можно было sort применить

            let htmlElementDiv = document.createElement("div");


            let htmlElementP = document.createElement("p");

            htmlElementP.setAttribute("id", item);


            htmlElementP.textContent = `x`;


            htmlElementDiv.textContent = item;

            printBlock1.appendChild(htmlElementDiv);

            printBlock1.appendChild(htmlElementP);

        }

    }

    document.getElementById("buttonAdd").addEventListener("click", addTag);


    printBlock1.onclick = function (event) {
        let target = event.target;

        console.log(target.getAttribute(`id`));

        if (target.tagName === `P`)  ////отфильтровываем нажатие только на р

            setTag.delete(target.getAttribute(`id`));

        printTag(setTag);
    };


    autocomplete.addEventListener("keyup", function () {

        if (!autocomplete.value) {

            autocompleteResult.innerHTML = "";

            return;

        }

        let a = new RegExp("^" + autocomplete.value, "i");

        let b = [];


        for (let item of Array.from(new Set([...setTag].filter(x => !setTag2.has(x))))) {


            if (a.test(item)) b.push(item);

        }

        autocompleteResult.innerHTML = '';

        b.forEach(function (item) {


            let htmlElementP = document.createElement("p");

            htmlElementP.setAttribute("id", item);


            htmlElementP.textContent = item;

            autocompleteResult.appendChild(htmlElementP);

        })
    });


        function selectTag(event) {

            let target = event.target;

            let editInput2 = document.getElementById("autocomplete");

            editInput2.value = ``;


            if (target.tagName === `P`) {

                let val = target.getAttribute(`id`);

                setTag2.add(val);

                autocompleteResult.innerHTML = '';


                printTag2(setTag2);


            }
        }


        let setTag2 = new Set();

        function addTag2() {
            let editInput2 = document.getElementById("autocomplete");
            let val2 = editInput2.value;
            setTag2.add(val2);
            printTag2(setTag2);

        }


        function printTag2(pSet) {
            let printBlock2 = document.getElementById("printBlock2");

            printBlock2.innerHTML = '';


            for (let item of Array.from(setTag2).sort()) {

                let htmlElementP2 = document.createElement("p");

                htmlElementP2.textContent = item;

                printBlock2.appendChild(htmlElementP2);

            }

        }

        document.getElementById("button2").addEventListener("click", addTag2);
        document.getElementById("autocompleteResult").addEventListener("click", selectTag);


    }());