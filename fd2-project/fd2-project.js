import Profile from "./class/Profile";
import Journal from "./class/Journal";


(function () {
    `use strict`;

//вешаем обработчики событий на кнопки

    document.getElementById("b1").addEventListener("click", drawProfile);



    /*document.getElementById("b2").addEventListener("click", );
    document.getElementById("b3").addEventListener("click", );
    document.getElementById("b4").addEventListener("click", );
    document.getElementById("b5").addEventListener("click", );
    document.getElementById("b6").addEventListener("click", );*/



 let myDate=document.getElementById('currentDate');
 let myTime = new Date();
    let weekday=new Array(7);
    weekday[0]="Воскресенье";
    weekday[1]="Понедельник";
    weekday[2]="Вторник";
    weekday[3]="Среда";
    weekday[4]="Четверг";
    weekday[5]="Пятница";
    weekday[6]="Суббота";
    document.write("Сегодня " + weekday[myTime.getDay()]);
    let day=d.getDate();
    let month=d.getMonth() + 1;
    let year=d.getFullYear();
    document.write(day + "." + month + "." + year);





    let myProfile = new Profile();

     let myJournal = new Journal();




    function drawProfile() {



        let fieldProfileNew = document.getElementById("centerPart");

        if (document.getElementById("fieldProfile")) {fieldProfileNew.innerHTML = '';
            ; return;}

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