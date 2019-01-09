// git checkout ifels

// yourName
// yourName - ternary operator (?)
/*
let name = document.getElementById('yourName');
let first = true;
let result = "";
let output = first ? result = 'Andrei' : result = 'George';
name.innerHTML = output;
*/

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
/*
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
*/

// array name Exercise
/*
let getName = document.getElementById('nameArr');
let nameArr = ['Andrew', 'Thomas', 'Thorin', 'Frank', 'Gilbert'];
let whichName = prompt('Is your name in the array?');
let isInArr = nameArr.indexOf(whichName) > -1 ? 'yes it is' : 'no its not';
getName.innerHTML = isInArr;
*/

/*
let insert = document.getElementById('response');
let names = ['Johny', 'Brody', 'Michel', 'Augustin', 'Andra'];
let insertName = prompt('What is your name');
let response = "";


if (names.indexOf(insertName) > -1) {
		alert('OK');
    let age = prompt('Tell us your age?');
		response = insertName + ' your name is in array';
   
    // response += age >= 18 ? ' and you are an adult' : ' and you are not an adult'; 

    if (age >= 18) {
    		response += ' and you are an adult';
        alert('good');
    } else {
    		response += ' and you are not an adult'
        alert('bad');
    }
    
} else if (insertName === "") {
		response = 'Write down your name';
} else {
		response = 'Your name is not in array';
}
insert.innerHTML = response;

*/

/* 
let time = document.getElementById('time');
let hour = 14;


if (hour > 6 && hour < 7) {
    time.innerText = 'It\'s time to get up';
} else if (hour === 10) {
    time.innerText = 'It\'s time to eat now';
} else if (hour >= 12 && hour <= 13) {
    time.innerText = 'Time to have launch';
} else if (hour >= 17 && hour <= 18) {
    time.innerText = 'Time to get back home';
} else if (hour >= 20) {
    time.innerText = 'You should prepare to get some sleep';
} else {
    time.innerText = 'Enjoy your day';
} */


// multiple cases in switch statement
// we test hour variable

/*
switch (Number(hour)) {
		case 14:
    time.innerText = 'Enjoy your day';
    case 15:
    case 16:
    console.log('hy'); 
    break;
    
    case 20:
    case 21:
    time.innerText = 'You should prepare to get some sleep';
    break;
    
    default:
    time.innerText = 'Time to have lunch';
}
*/

// tiempo
/* 
let tiempo = document.getElementById('tiempo');
let ora = prompt('What hour it is');
let html = "";

switch (Number(ora)) {
	case 7:
    html = 'Get Up';
    break;
    
  case 10:
  	html = 'Launch time';
    break;
    
  case 12:
  case 13:
  case 14:
  case 15:
  	html = 'Work Time';
  	break;
    
  case 18:
  	html = 'Finish Work';
    break;
  
  default:
  	html = 'Enjoy your day';
}

tiempo.innerHTML = html;
*/


// Magic 8Ball

/*
const _8ball =  document.getElementById('8ball');
let random = Math.floor(Math.random() * 6 + 1);
let askMe = prompt('What do you want to know?');
let reply = '';

switch(random) {
		case 0:
      reply = 'Maybe';
      break;
    
    case 1: 
      reply = 'I dont really know';
      break;
     
    case 2:
    	reply = 'You need to find out by yourself';
      break;
      
    case 3:
    	reply = 'We will see in time';
      break;
      
    case 4:
    	reply = 'Ask someone else';
      break;
      
    default:
    	reply = 'Ask me something useful';
      break;
}

_8ball.innerHTML = 'You asked me: ' + '<br>' + askMe + '<br><br>' + ' And my response is: ' + '<br>' + ' ' + reply;
*/



// Rocket, Paper, Scrissor

const rpcResult = document.getElementById('rpc');

let vars = ['Rocket', 'Paper', 'Scissor'];
let playerPos = Math.floor(Math.random() * 3);
let computerPos = Math.floor(Math.random() * 3);

let player = vars[playerPos].charAt(0).toLowerCase();
let computer = vars[computerPos].charAt(0).toLowerCase();


if (player === computer) {
    rpcResult.innerHTML = 'its a tie';
    
} else if (player === 'r') {
    if (computer === 'p') {
        rpcResult.innerHTML = 'Player Wins'; 
    } else if (computer === 's') {
        rpcResult.innerHTML = 'Player Wins';
    }
} else if (player === 's') {
    if (computer === 'p') {
        rpcResult.innerHTML = 'Player Wins';
    } else if (computer === 'r') {
        rpcResult.innerHTML = 'Computer Wins';
    }
} else if (player === 'p') {
    if (computer === 's') {
        rpcResult.innerHTML = 'Computer Wins';
    } else if (computer = 'r') {
        rpcResult.innerHTML = 'Computer Wins';
    }
}

console.log('player choice: ' + player);
console.log('computer choice: ' + comput    er);

