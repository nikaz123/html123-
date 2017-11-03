let userSurname = textData(`Введите фамилию`),
    userName = textData(`Введите имя`),
    userLastname = textData(`Введие отчество`),
    dayOfBirth = 0;


let Year = 0;
while (Year < 1900) {
    Year = numberData(`Введите год рождения`)
}
let Month = 0;
while (!(Month>=1 && Month<=12)) {
    Month = numberData(`Введите месяц рождения от 1 до 12`);
}

let badDayOfBirth = false;

while (!(dayOfBirth > 1 && dayOfBirth < 32 &&  !badDayOfBirth  )) {
    dayOfBirth = numberData(`Введите число рождения от 1 до 31`);
    checkDate= new Date(Date.parse(Year+`-`+Month+`-`+dayOfBirth));
  badDayOfBirth = (isNaN(Date.parse(Year+`-`+Month+`-`+dayOfBirth))||(checkDate.getDate()!==Number(dayOfBirth)) );}



let gender = numberData(`Введите пол (1-муж или 2-жен)`),


    country = textData(`Введите страну проживания`),
    dataCity = numberData(`Введите населенный пункт проживания 1-город, 2-село, 3-деревня`),
    cityName = textData(`Введите название населенного пункта`),
    dataStreet = numberData(`Введите улицу 1-улица, 2-проспект, 3-бульвар, 4-переулок`),
    streetName = textData(`Введите название улицы`),
    domNumber = `д.`,
    dataDomNumber = numberData(`Введите номер дома`),


    pension = ``;


let fMonth = ``;
switch (Month) {
    case `1`:
        fMonth = "января";
        break;
    case `2`:
        fMonth = "февраля";
        break;
    case `3`:
        fMonth = "марта";
        break;
    case `4`:
        fMonth = "апреля";
        break;
    case `5`:
        fMonth = "мая";
        break;
    case `6`:
        fMonth = "июня";
        break;
    case `7`:
        fMonth = "июля";
        break;
    case `8`:
        fMonth = "августа";
        break;
    case `9`:
        fMonth = "сентября";
        break;
    case `10`:
        fMonth = "октября";
        break;
    case `11`:
        fMonth = "ноября";
        break;
    case `12`:
        fMonth = "декабря";
        break;
}


let fdata5 = ``;
switch (dataCity) {
    case `1`:
        fdata5 = "г.";
        break;
    case `2`:
        fdata5 = "с.";
        break;
    case `3`:
        fdata5 = "д.";
        break;
}

let fdata6 = ``;
switch (dataStreet) {
    case `1`:
        fdata6 = "ул.";
        break;
    case `2`:
        fdata6 = "пр-т.";
        break;
    case `3`:
        fdata6 = "б.";
        break;
    case `4`:
        fdata6 = "пер.";
        break;
}


if (gender === `1`) {
    gender = `муж`;
    if (2017 - Year >= 60) {
        pension = `Да`
    } else {
        pension = `Нет`
    }
}
else if (gender === `2`) {
    gender = `жен`;
    if (2017 - Year >= 55) {
        pension = `Да`
    } else {
        pension = `Нет`
    }
}
else {
    gender = `Введен неправильно пол`
}


displayInfo(userSurname, userName, userLastname, dayOfBirth, fMonth, Year, gender, country,  fdata5, cityName,  fdata6, streetName,  domNumber, dataDomNumber);


function numberData(nPrompt) {
    let inputOk = false,
        pInput = ``;
    console.log(`before in`);
    while (!inputOk) {
         pInput = prompt(nPrompt);

        if (isFinite(Number.parseInt(pInput))) {
            inputOk = true;
        }

    }

    return (pInput);

}


function textData(pPrompt) {

    let inputOk = false,
        pInput = ``;

    while (!inputOk) {
         pInput = prompt(pPrompt);
        if (isNaN(Number(pInput))) {
            inputOk = true;
        }

    }
    return pInput;

}


function displayInfo(userSurname, userName, userLastname, dayOfBirth, Month, Year, gender, country,  dataCity, cityName,  dataStreet, streetName, domNumber, dataDomNumber) {
    alert(`
               ФИО: ${userSurname} ${userName} ${userLastname}
               Дата рождения: ${dayOfBirth} ${Month} ${Year}
               Пол: ${gender}
               Адрес: ${country}, ${dataCity} ${cityName},  ${dataStreet} ${streetName},  ${domNumber} ${dataDomNumber} 
               На пенсии: ${pension}
        
     `);
}
