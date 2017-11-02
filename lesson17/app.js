let userName = prompt('Enter your name'),
    userAge = Number(prompt('How old are you?'));

if (isFinite(userAge) && userAge !== 0 && userAge <= 100) {
    createInfo(userAge);
                                                          }
   else if (userAge === 0 || userAge>100) {

if (confirm(`${userAge}`)) {
    createInfo(userAge);
                           }
else {
    userAge = Number(prompt(`How old are you?`));
    createInfo(userAge);
     }
                                           }
else
    {
    alert(`Good bye`);
    }



function createInfo(userAge) {
    displayInfo(userName, userAge, getYear(userAge),getGender());

                             }

function getGender() {return confirm(`Are you male`)?`male` : `female`;}


function getYear(userAge) {return 2017 - userAge; }

 function displayInfo(userName, userAge, year, gender) {
     alert (`
                Name: ${userName}
                Age: ${userAge}
                Year of birth: ${year}
                Gender: ${gender}
        
     `);
}













