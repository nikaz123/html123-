(function () {
    `use strict`;

 class  sportHelper {

     constructor () {
this.ArraySport = [
    [`катание на коньках`, 3],
    [`бег`, 7],
    [`аэробика`, 5],
    [`хотьба`, 3],
    [`езда на велосипеде`, 5]

]

     }   ////инициализация спорта



     getCcal (viewOFSport, timeOfSportMinutes, weightKG) {

         return viewOFSport*timeOfSport*weightKG/60;
     }


     getSportNames () {
         


     }



 }











}());