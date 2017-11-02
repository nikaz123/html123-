  let  userName = prompt(`enter your name`),
       userAge = Number(prompt(`how old are you`));



  if (isFinite(userAge) && userAge !==0 && userAge <= 100) {

      let year = 2017 - userAge;

    let  isMale = confirm(`are you male`);
    if (isMale) {
        gender = `male`; }

    else {
        gender = `female`;  }


    alert(`
          name: ${userName}
          age: ${userAge}
          year: ${year}
          gender: ${gender}` );}


    else { //if (userAge ===0 || userAge > 100) {
        let answer = confirm(`${userAge}`);
        if (answer) { alert(`good bye`)}

         else{
            userAge = Number(prompt(`how old are you`));
            let year = 2017 - userAge;
            let  isMale = confirm(`are you male`);

            if (isMale) {
                gender = `male`;     }

            else {
                gender = `female`;  }


            alert(`
                  name: ${userName}
                  age: ${userAge}
                  year: ${year}
                  gender: ${gender}`); }




}

function message () {

}