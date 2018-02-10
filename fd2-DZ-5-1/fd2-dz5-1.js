(function () {
    `use strict`;


//     Создайте класс Car, который будет создавать объекты «автомобили».
//     Конструктор должен принимать три параметра: вес автомобиля [кг], объём топливного бака [л], мощность [л.с.].
//
//         Создаваемые объекты должны иметь шесть свойств:
//     вес (значение из аргумента),
//     объём бака (значение из аргумента),
//     мощность (значение из аргумента),
//     расход топлива [л/км] (вычислить),
//     время разгона до 100 км/ч [c] (вычислить)
//     максимальная скорость [км/ч] (вычислить).
//
//         Вычислить – самостоятельно придумать формулу основываясь на трёх аргументах и получить число в требуемых единицах измерения.
//
// Объекты  «автомобили» должны иметь один метод race, который принимает в качестве аргумента дистанцию [км] и возвращает время в формате hh:mm:ss.SSS, за которое автомобиль преодолел данную дистанцию.


//
//         Реализовать класс Car двумя способами в отдельных файлах: в синтаксисе ES5 (прототип и функция конструктор) и в синтаксисе ES6 (класс).


    function Car(weight, capacity, power) {  ///создали конструктор с 3 вх параметрами
        this.weight = weight;   ///вес
        this.capacity = capacity; // объем топливного бака
        this.power = power;  /// мощность
        this.fuelConsumption = this.calcFuelConsumption();
        this.accelerationTime = this.calcAccelerationTime();
        this.topSpeed = this.calcTopSpeed();


    }

    Car.prototype.calcFuelConsumption = function () {
        return this.power * 1.3;                           ///расход топлива
    };


    Car.prototype.calcAccelerationTime = function () {
        return this.weight / this.power * 0.3;                         ////время разгона
    };


    Car.prototype.calcTopSpeed = function () {
        return this.power * 1.2;                     /// максимальная скорость
    };


    Car.prototype.race = function (distance) {


            let time = (distance/this.topSpeed*1.5)*60*60*1000;


        let msec = time % 1000;
        time = (time - msec) / 1000;
        let sec = time % 60;
        time = (time - sec) / 60;
        let mins = time% 60;
        let hours = (time- mins) / 60;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (sec < 10) sec = '0' + sec;
        if (msec < 10) msec = '0' + msec;
        if (msec < 100) msec = '0' + msec;


        return hours + ':' + mins + ':' + sec + ':' + msec;




    };


    let car1 = new Car(3000, 100, 250);
    let car2 = new Car(1500, 50, 75);
    let car3 = new Car(2000, 200, 300);

    console.log(`car1 `+ car1.race(100));
    console.log(`car2 `+car2.race(200));
    console.log(`car3 `+car3.race(300));

    console.log(car1);
    console.log(car2);
    console.log(car3);

}());