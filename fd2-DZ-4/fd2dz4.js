(function () {
    `use strict`;


//
//
// Петя и Вася играют в карточную игру. Колода из 36-ти карт была перетасована и распределена поровну между игроками.
//     Вращая барабан, на котором отмечены четыре карточные масти, игроки определяют козырную масть.
//     Игроки по очереди выкладывают по одной карте с конца своей стопки.
//     Если обе карты не являются козырной масти, то «карта-победитель» определяется лишь на основе их достоинства.
//     Если только одна из карт является козырной масти, то она побеждает. Если обе карты являются козырной масти, то они сравниваются по достоинству.
//     Игрок, чья карта победила, получает на свой счёт 1 балл, а игрок, который проиграл получает 0 баллов, если карты идентичные, то оба получают 0.
//
// Задача: Вывести на страницу браузера имя победителя, итоговый счёт, козырную масть и таблицу, где будет указано, какие карты положили игроки на каждом шаге.
//     Каждый ход (строка таблицы) отображается на странице по клику пользователя. Отобразить карту специальным символом (по желанию).
// Пример страницы можно посмотреть на следующем слайде.
//
//
//     Требования: каждый раз колода распределеятся между игроками по-разному.
//     Каждая карта представляет собой объект. Колода карт и «рука» каждого игрока – массивы.
//     Для вывода результатов на страницу запрещается использование библиотек и готовых стилей.


    function card(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }

    function deck() {                             /// создается упарядоченная колода карт
        this.names = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', `T`];
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        let cards = [];

        for (let s = 0; s < this.suits.length; s++) {
            for (let n = 0; n < this.names.length; n++) {
                cards.push(new card(n + 1, this.names[n], this.suits[s]));
            }
        }

        return cards;  /// массив объектов
    }


    let copyDeck = deck();  /// в этой пеерменной хранится колода карт полученная путем вызова функции   deck(). ее результат записан в переменную.

    console.log(copyDeck);


    let randomCopyDeck = copyDeck.slice().sort(function () {    // элементы исходного массивы перемешали случайным образом
        return 0.5 - Math.random()
    });



    console.log(randomCopyDeck);


    let trump = copyDeck[Math.floor(Math.random() * copyDeck.length)].suit;        // козырь выбирается случайным образом


/// раздача колоды на две по 18 карт случайным образом

    let hand1 = [];
    let hand2 = [];




    function printTrump() {                                         /// функция для выбора случайного козыря и отображения в барабане и в результатах
        let trumpSeen = document.getElementById("trumpSeen");
        let trumpSeen2 = document.getElementById("trumpOfGame");

        let htmlElementDiv = document.createElement("p");
        let htmlElementDiv2 = document.createElement("p");

        htmlElementDiv.textContent = trump;
        htmlElementDiv2.textContent = trump;

        trumpSeen.appendChild(htmlElementDiv);
        trumpSeen2.appendChild(htmlElementDiv2);


        for (let i = 0; i < randomCopyDeck.length; i = i + 2) {   /// половина колоды
            hand1.push(randomCopyDeck[i]);
        }

        hand1.reverse();

        console.log(hand1);

        for (let i = 1; i < randomCopyDeck.length; i = i + 2) {   /// вторая половина колоды
            hand2.push(randomCopyDeck[i]);
        }

        hand2.reverse();

        console.log(hand2);





    }

    document.getElementById("trumpButton").addEventListener("click", printTrump);




    function printNames1() {  //ВВодится имя первого игрока и появляется в поле результатов
        namesPlayers1.innerHTML = '';
        let name1 = document.getElementById("editField1");
        let val1 = name1.value;
        let htmlElementDiv11 = document.createElement("p");
        htmlElementDiv11.textContent = val1 +` ` + userScore1;
        namesPlayers1.appendChild(htmlElementDiv11);

    }




    function printNames2() {  //ВВодится имя второго игрока и появляется в поле результатов

        namesPlayers2.innerHTML = '';

        let name2 = document.getElementById("editField2");
        let val2 = name2.value;
        let htmlElementDiv12 = document.createElement("p");
        htmlElementDiv12.textContent = val2 +` `+ userScore2;
        namesPlayers2.appendChild(htmlElementDiv12);
    }

    document.getElementById("buttonAdd1").addEventListener("click", printNames1);
    document.getElementById("buttonAdd2").addEventListener("click", printNames2);


    let userScore1 = 0;  /// переменные дял учета счета игроков
    let userScore2 = 0;
    let gameStep=0;   /// счетчик  хода игры


    document.getElementById("eventGame").addEventListener("click", eventGame);

    function eventGame () {

        let stepuserScore1 = hand1[gameStep].value;  ///
        let stepuserScore2 = hand2[gameStep].value;

        if (hand1[gameStep].suit===trump) {

            stepuserScore1=stepuserScore1*10;
        }

        if (hand2[gameStep].suit===trump) {

            stepuserScore2=stepuserScore2*10;
        }

        if (stepuserScore1>stepuserScore2) {userScore1=userScore1+1}

        if (stepuserScore1<stepuserScore2) {userScore2=userScore2+1}


        let steps = document.getElementById("gameSteps");


        let stepsP = document.createElement("p");


        stepsP.textContent = `* `+hand1[gameStep].name + ` `+hand1[gameStep].suit+` `+userScore1+` * `+`* `+hand2[gameStep].name + ` `+hand2[gameStep].suit+` `+userScore2+` * `;

        steps.appendChild(stepsP);


        gameStep=gameStep+1;

        printNames1();

        printNames2();







    }















    document.getElementById("button").addEventListener("click", function()   /// по нажатию на кнопку Новая игра пеергружается старница
    { console.log (`hf`);

        location.reload(true);

    });




}());