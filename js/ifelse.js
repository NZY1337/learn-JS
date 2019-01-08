// git checkout ifels

// yourName
// yourName - ternary operator (?)
let name = document.getElementById('yourName');
let first = true;
let result = "";
let output = first ? result = 'Andrei' : result = 'George';
name.innerHTML = output;

/*
yourAge - ternary operator (?)
let age = document.getElementById('age');
let permitedAge = 18
let yourAge = prompt('how wold are you');
let allowed = yourAge >= permitedAge ? 'you are an adult' : 'you are not an adult';
age.innerHTML = allowed; 
*/

// yourGender - ifelse statement
/*
let gender = document.getElementById('gender');
let wearSkyrt = 'woman';
let yourGender = prompt('What is your gender?');
if  (yourGender === ""){
    gender.innerHTML = 'write down your gender';
} else if (yourGender === wearSkyrt){
    gender.innerHTML = 'you can wear a skirt';
} else {
    gender.innerHTML = 'you do not want to wear a skirt';
}
*/

// yourGender - ternary operator (?)
/*
let gender = document.getElementById('gender'); // this will hold the answer in the end
let wearSkyrt = 'woman';
let yourGender = prompt('What is your gender?');
let skyrtAllowed = yourGender === wearSkyrt ? 'you can wear a skirt' : 'you cant wear a skirt';
gender.innerHTML = skyrtAllowed;
*/


// yourGender - switch statement;
/*
let gender = document.getElementById('gender'); // this will hold the answer in the end
let yourGender = prompt('What is your gender?');
let wearSkyrt = 'woman';

switch (yourGender) {
    case 'woman' :
    yourGender === wearSkyrt;
    gender.innerHTML = 'you can wear a skirt';
    break;

    case 'man' :
    case '' :
    yourGender !== wearSkyrt;
    gender.innerHTML = 'you cant wear a skirt';
    break;

    default: 
    gender.innerHTML = 'you are an animal';
}
*/


// yourGender - switch statement - without var wearSkyrt;

let gender = document.getElementById('gender'); // this will hold the answer in the end
let yourGender = prompt('What is your gender?');

switch (yourGender) {
    case 'man' : 
    gender.innerHTML = 'you cant wear a skirt';
    break;

    case 'woman' :
    gender.innerHTML = 'you can wear a skirt';
    break;

    case '' :
    gender.innerHTML = 'please write down your gender';
    default: 
    gender.innerHTML = 'you are an animal';
};





