

import Profile from  "./class/profile";



(function () {
    `use strict`;


    let field1 = document.getElementById("header");

    let btn1 = document.createElement("input");
    btn1.id = 'b1';
    btn1.type = 'button';
    btn1.value = 'Профиль';
    ////btn1.setAttribute('click', 'obj.HandleClick1();');


    let btn2 = document.createElement("input");
    btn2.id = 'b2';
    btn2.type = 'button';
    btn2.value = 'Журнал';
    btn2.setAttribute('click', 'obj.HandleClick1();');


    let btn3 = document.createElement("input");
    btn3.id = 'b3';
    btn3.type = 'button';
    btn3.value = 'Настройки';
    btn3.setAttribute('click', 'obj.HandleClick1();');


    field1.appendChild(btn1);

    field1.appendChild(btn2);

    field1.appendChild(btn3);






    let myProfile = new Profile();

    myProfile.data.name = `Veronika`;
    myProfile.data.gender = `женский`;
    myProfile.data.dateOfBirth = `29.04.1981`;
    myProfile.data.height = `75 кг`;
    myProfile.data.weght = `165 см`;
    myProfile.data.waist = `80 см`;
    myProfile.data.hipsize =`75 см`;
    myProfile.data.breastSize = `100 см`;
    myProfile.data.calories = `1100 ккал`;


    document.getElementById("b1").addEventListener("click", drawProfile);

    function drawProfile() {


        let fieldProfileNew = document.getElementById("centerPart");



        let fieldProfile = document.createElement('div');
        fieldProfile.id = `fieldProfile`;


        fieldProfileNew.innerHTML = '';

        fieldProfileNew.appendChild(fieldProfile);



        let p1Profile = document.createElement("p");
        p1Profile.textContent =`Имя` + `  ` +  myProfile.data.name;
        fieldProfile.appendChild(p1Profile);


        let p2Profile = document.createElement("p");
        p2Profile.textContent = `Пол` + `  `+myProfile.data.gender;
        fieldProfile.appendChild(p2Profile);

        let p3Profile = document.createElement("p");
        p3Profile.textContent = `Дата рождения` + `  ` + myProfile.data.dateOfBirth;
        fieldProfile.appendChild(p3Profile);


        let p4Profile = document.createElement("p");
        p4Profile.textContent = `Вес` + `  ` + myProfile.data.height;
        fieldProfile.appendChild(p4Profile);

        let p5Profile = document.createElement("p");
        p5Profile.textContent = `Рост` + `  ` + myProfile.data.weght;
        fieldProfile.appendChild(p5Profile);

        let p6Profile = document.createElement("p");
        p6Profile.textContent = `Объем груди` + `  ` + myProfile.data.waist;
        fieldProfile.appendChild(p6Profile);

        let p7Profile = document.createElement("p");
        p7Profile.textContent = `Объем талии` + `  ` + myProfile.data.hipsize;
        fieldProfile.appendChild(p7Profile);

        let p8Profile = document.createElement("p");
        p8Profile.textContent = `Объем бедер` + `  ` +myProfile.data.breastSize;
        fieldProfile.appendChild(p8Profile);

        let p9Profile = document.createElement("p");
        p9Profile.textContent =`Суточная норма ` + `  ` + myProfile.data.calories;
        fieldProfile.appendChild(p9Profile);


    }



    // let myJournal = new Journal(myProfile);





}());