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


    class Car {

        constructor(weight, capacity, power) {

            this.weight = weight;   ///вес
            this.capacity = capacity; // объем топливного бака
            this.power = power;  /// мощность

            this.fuelConsumption = this.power * 1.3;

            this.accelerationTime = this.weight / this.power * 0.3;

            this.topSpeed = this.power * 1.2;

        }

        race(distance) {
            let time = (distance / this.topSpeed * 1.5);

            let hours = Math.floor(time),
                mins = Math.floor((time - hours) * 60),
                sec = Math.floor(((time - hours) * 60 - mins) * 60),
                msec = Math.floor((((time - hours) * 60 - mins) * 60 - sec) * 1000);


            if (hours < 10) hours = '0' + hours;
            if (mins < 10) mins = '0' + mins;
            if (sec < 10) sec = '0' + sec;
            if (msec < 10) msec = '0' + msec;
            if (msec < 100) msec = '0' + msec;


            return hours + ':' + mins + ':' + sec + ':' + msec;


        }


    }

    let car1 = new Car(3000, 100, 250);
    let car2 = new Car(1500, 50, 75);
    let car3 = new Car(2000, 200, 300);

    console.log(`car1 ` + car1.race(100));
    console.log(`car2 ` + car2.race(200));
    console.log(`car3 ` + car3.race(300));

    console.log(car1);
    console.log(car2);
    console.log(car3);


}());