



 // function isPoly (str) {
 //   str = str.toLocaleString().split(` `).join(``);

 //   let symbolSet = str.split(``);

  //  symbolSet = str.reverse();

   //  let strNew = symbolSet.join(``);

   //  return str === strNew; }

 


//function getPoints(coordinates) {

  //  return coordinates
 //       .map(function (point) {

     //       return `${point.x},${point.y}`;
//

 //       })
//.join(` `);
//}


//function getNumbers (numbers) {
  //  return numbers.filter(function (number) {
  //      return number % 2;
 //   });
//}


//(function () {
   // `use strict`;


 // let btn = document.getElementById(`testBtn`);

   // btn.addEventListener(`click`, function listener () {

       // alert(btn.tagName);
       // btn.removerEventListener(`click`, listener);

       // this.style.color = `yellow`;
       // this.style.background = `blue`;
       // this.style.borderRadius = `10px`;

  // });




 //   alert(btn.textContent);

 //   btn.innerHTML =`
//<ul>

//<li><span>1</span></li>
//<li><span>1</span></li>
//</ul>

//`;
//    let spanArrey = [...btn.querySelectorAll(`span`)];
  //  spanArrey.forEach(function (span) {
   //    return span.textContent = Number(span.textContent)*5;

   // });




//}());
//let x =  Mmfp (`3.3.3_3`);
//function Mmfp (value) {
 // let value1 =  value.split(`.`);
 //if (value1.length!==3) {
 //    return NaN;
 //}

 //let valueElement3 = value1[2].split(`_`);

//let version = [];
//    version.push (value1[0]);
//    version.push (value1[1]);
//   version.push (valueElement3[0]);
//    version.push (valueElement3[1]);
//   return version;

//}

//function C2F (value) {
 //  return value*1.8+32;
//}


 //function CC (value) {
//function F2C (value1) {
  //  return (value1-32)/1.8;
//}


  //  let now = new Date();

  //   let version1 = {now, value};

  //   return version1;

 //}



  //for (let i=1; i<=50; i++) {

 //   console.log(`i`);

// }

// (function () {
 //   `use strict`;


//let arr = [1, 2, 3, 4, 5, 6],
// liner = ``;

// for (let i=0; i<=arr.length;  i++)  {
                                   //consol.log(`arr[i]`);
//liner +=`<p>${arr[i]}</p>`;
// }
//document.body.innerHTML = liner;
 //} ());



// let arr = [ 2, 3, 4, 5],
// abc=1;

 // for (let i=0; i<=arr.length;  i++) {
 //
 //      abc *= arr[i];
 //
 //      console.log(abc);
 //  }
 // document.body.innerHTML = abc.reduce((acc, item)=> acc*item, 1);
 //
 //
 //
 //
 // for (let i=2; i<=100; l+=2){
 //   console.log(i);
 //
 // }
 //
 //
 //
 //
 //
 // let n=1000,
 //
 // num=0;
 //
 // do {
 //     n=n/2;
 //
 //     num++;
 //
 // } while (n>=50);

//
// (function () {
//
// `use strict`;
//
//
//
//  let randomArray = getRandomArray();
//  let filteredArray = randomArray.filter(isPositive);
//  console.log(randomArray);
//  console.log(filteredArray);
//
//  function isPositive (num) {
//      return num>0;
//  }
//
// function getRandomArray () {
//      let length = getRandomValue(0, 100);
//          arr = new Array (length);
//          for (let i = 0; i<length; i++) {
//              arr[i] = getRandomValue(-100, 100);
//          }
//          return arr;
//          }
//
//
// function getRandomValue (min, max) {
//    return  min +Math.round((Math.random()*(max-min)));
// }
//  }());


//
//  (function () {
//     `use strict`;
//
//     let btn = document.createElement(`button`);
//     btn.textContent = `Этой кнопки тут не было`;
//     btn.id = `testBtn`;
//     btn.type = `button`;
//
//
//
//
//     function clickHandler (event) {
//         console.log(event);
//         this.removeEventListener(`click`, clickHandler);
//
//         console.log(this.getBoundingClientRect());
//         this.remove();
// }
//
//     btn.addEventListener(`click`, clickHandler);
//
//     let copy1 = btn.cloneNode(true);
//
//      let copy2 = btn.cloneNode(true);
//
//
//     document.body.append(btn, copy1, copy2);
//
//  }());

 //
 // (function () {
 //     `use strict`;
 //
 //     let testEl = document.getElementById(`test`);
 //     testEl.addEventListener(`click`, function (event) {
 //         let target = event.target || event.srcElement,
 //             btn = target.target.matches(`button`) ? target : target.closest(`button`);
 //         if (btn) {
 //             let isPressedButton = btn.classList.contains(`pressed`);
 //             if (btn.dataset.unique === `true`) {
 //                 let pressedButton = [...testEl.querySelectorAll(`button.pressed`)];
 //                 pressedButton.forEach(btn => btn.classList.remove(`pressed`));
 //
 //             }
 //
 //                 btn.classList.toggle(`pressed`, !isPressed);
 //             }
 //
 //     })
 //}());

 //
// for (let i = 0; i<5; i++) {
 //    setTimeout(()=> {console.log(i)},1000);
 //
 //
 // }
 // for (var i = 0; i<5; i++) {
 //     setTimeout(()=> {console.log(i)},1000);
 //
 //
 // }
//






 (function () {
     `use strict`;

const aEl = document.createElement(`a`);


     let fetchBtn = document.getElementById(`fetchBtn`),
         contentWrapper = document.getElementById(`contentWrapper`);

     fetchBtn.addEventListener(`click`, function () {
         makeRequest({
         method: `GET`,
         url: `data.json`,
         responseType: `json` },
             function (err, linkList) {

             makeRequest({
                 method: `GET`,
                 url: `list.html`,
                 responseType: `document`



             }, function (err, docBody) {
                 let ul = docBody.body.firstElementChild;
             LI = ul.firstElementChild;
             ul.removeChild(LI);
             linkList.forEach(link => {
                 let li = LI.cloneNode(true),
                     a = li.firstElementChild;
                 a.href = link.href;
                 a.textContent = link.label;
                 ul.appendChild(li);

             });
                 contentWrapper.appendChild(ul)
             });

             if (!err) {
                 let linkList = JSON.parse(data);
                 linkList.forEach(link => {
                     let a = aEl.cloneNode(true);
                     a.href = link.href;
                     a.textContent = link.label;
                     contentWrapper.appendChild(a);
                 });



         }
     });


     }





      function makeRequest(params, callback) {
          let

              xhr = new XMLHttpRequest();
          xhr.open(method, url, true);
          xhr.onerror= function (err) {
              callBack(err, null);

          };
          xhr.onload = function () {
              callBack(null, xhr.response);


          };
          xhr.send(data);










      makeRequest(`GET`, `list.html`, data, callBack) {


         if (!err) {

             contentWrapper.innerHTML = data;
         }

     };



};

 }());


l
