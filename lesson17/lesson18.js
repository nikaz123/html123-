
//let i = 0;
//let value = 1;

//for ( let i = 0; i<16; i++) {

  //  value *=basis;
   // console.log (value)
//console.log(Math.pow(basis, i));
//}

//do {  console.log(++i);}
//while (confirm(`continue`));
//console.log(`finish`);




let  number1 = userInput(`enter your number1`, `number`),
     number2 = userInput(`enter your number2`, `number`),
     start,
     end,
     summa = 0;

if (number1<number2) {
     start = number1;
     end = number2;
}
else {
     start = number2;
     end = number1;
}



for (let i=start; i<=end; i++)
{
    summa += i;

}

console.log(summa);


function userInput (message, type) {
    let result = prompt(message);
    switch (type) {
        case `number`:
            return Number(result);
        default:
            return result;


    }
}


function argTest() {
    console.log(`Args count: $(arguments.length}`);
    for (let i = 0; i < arguments.length; i++){
        console.log(`Arguments $(i+1): ${arguments[i]}`);
    }

}



let fn =  argTest;


fn();
fn(4, 45, 7878, 7/878, `rewgew`, true);
fn(4, 45, `dhfrewgew`, true, false);


