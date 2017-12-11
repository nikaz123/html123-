(function () {

   let user = {
       firstName: `john`,
       lastName: `black`,
       yearofbirth: 1956,
        getfulName: function () {
            return `${this.firstName} ${this.lastName}`
        },

        getAge: function () {

           return 2017 - this.yearofbirth;

        }


   };
   console.log(user);
   console.log(user.getfulName());
   console.log(user.getAge());



}());


let user = {
    name: `john`,
    sayHello: function () {
        alert(this.name);
    }


    }
 let arr = {
    forEach (fn, ctx) {
        let arr = this;
        fnc = fn.bind(ctx);
        for(let i = 0; i < arr.length; i++){
            fnc(arr[i], i, arr);
        }
    }
 }

 let numbers = [1, 2, 3, 4, 5];

let result = numbers.find(function (value) {
    return value%5 === 0;

})