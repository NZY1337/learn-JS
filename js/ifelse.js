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

/*
const rpcResult = document.getElementById('rpc');
const vars = ['Rocket', 'Paper', 'Scissor'];
let askWhat = prompt('choose Rocket or Paper or Scissor');
let player = askWhat.charAt(0).toLowerCase();

let computerPos = Math.floor(Math.random() * 3);
let computer = vars[computerPos].charAt(0).toLowerCase();


function negateCheck()  {
    if (player != 'r' && player != 'p' && player != 's') {
        alert('your choice doesn\'t match');
    }
    return;
}

negateCheck();


if (player == computer) {
    rpcResult.innerHTML = 'its a tie';
} else if (player == 'r') {
    rpcResult.innerHTML = 'Player wins'; // Player Wins nomatter what Computer chooses
} else if (computer == 'r') {
    rpcResult.innerHTML = 'Computer Wins'; // Computer Wins nomatter what Player chooses
} else if (player == 's') {
    if (computer == 'p') {
        rpcResult.innerHTML = 'Player Wins';
    } else if (computer === 'r') {
        rpcResult.innerHTML = 'Computer Wins';
    }
}    

console.log('player choice: ' + player);
console.log('computer choice: ' + computer);

*/


// Heads Or Tail Game

/*
tailHeadGame = () => {
    const player = document.getElementById('chosen');
    const computer = document.getElementById('computer');
    const finalAnswer = document.getElementById('gameRes');
    const arrTailHead = ['tail', 'head'];
    let random = Math.floor(Math.random() * 2);
    let computerChoice = arrTailHead[random];
    let game = prompt('Head Or Tail ?');

    let playerChoice = game == 'tail' ? arrTailHead[0] : arrTailHead[1];
    if (game == "") {
        alert("choose between 'head' or 'tail'");
    }
    else if (playerChoice == computerChoice) {
        player.innerHTML = 'Player chose: ' + game;
        computer.innerHTML = 'computer chose: ' + computerChoice;
        finalAnswer.innerHTML = 'MATCH'
    } else {
        player.innerHTML = 'Player chose: ' + game;
        computer.innerHTML = 'computer chose: ' + computerChoice;
        finalAnswer.innerHTML = 'DIFFERENT';
    }
    console.log('computer choice: ' + computerChoice);
}

tailHeadGame();

*/

// tail (player choice) == tail (comp choice) - ok
// tail (player choice) == head (comp choice) - not ok

// if playerChoice is not 'tail' - playerchoice = arrTailHead[1], but arrTailHead[1] can be equal with computerChoice
// head (player choice) == head (comp choice) - ok
// head (player choice) == tail (comp choice) - not ok


// Crack the code game's logic

let crack = {
    arr1 : [6, 8, 2], // 1 correct, good placed
    arr2 : [6, 1, 4], // 1 correct, wrong placed
    arr3 : [2, 0, 6], // 2 correct, wrong placed
    arr4 : [7, 3, 8], // nothing correct
    arr5 : [7, 8 ,0] // 1 correct, wrong placed  
}

let found = 0;
let repeatedNumber = []; // it must be an array because we can have more than 1 repeated


// A - eliminate first number

function checkFirstTwoArr() {
    for (let i = 0; i < crack.arr1.length; i++) {
        for (let j = 0; j < crack.arr2.length;j++) {
            if (crack.arr1[i] == crack.arr2[j]) {
                found++;
                // console.log('We found ' + found + ' repeated numbers');
                repeatedNumber.push(crack.arr2[i]);
            }
        }
    }
    return repeatedNumber;
}

checkFirstTwoArr();

// B - extract 6 from first two arrays because 6 can't exists in the both arrays 
function removeRepeatedNumber() {
   let rep = crack.arr2.filter(el => {
       return repeatedNumber.indexOf(el) < 0;
   });
   return rep;
}
removeRepeatedNumber();


// C - we can remove the first number from the object (6);
function removeRepeat(repeat) {
    let x;
    for (let key in crack) {
         x = crack[key].filter(function(f){
            return !repeat.includes(f);
        }); 
        // args.push(x);
        crack[key] = x;
    }
    return crack;
}

removeRepeat(repeatedNumber);


// D - step 4 nothing correct;
// from the new Object we can delete the fourth array, but first we need to eliminate the (7 and 8 from the entire object);

let repeatedNumberFromStep4 = [7, 8];

function removeRepeat(repeat) {
    let x;
    for (let key in crack) {
         x = crack[key].filter(function(f){
            return !repeat.includes(f);
        }); 
        // args.push(x);
        crack[key] = x;
    }
    return crack;
}

removeRepeat(repeatedNumberFromStep4);

// since we have removed 7 and 8 from the entire object, we can remove also 3 from the arr4 (from step 4);

removeFourth = () => {
    return delete crack['arr4'];
}

removeFourth();


// E - now let's rebuild the object to see exactly what I have deleted so far

rebuild = (obj) => {
    // for arr 1 we have deleted first two numbers (6,8);
    obj.arr1.unshift('_', '_');
    obj.arr2.unshift('_');
    obj.arr3.push('_');
    obj.arr5.unshift('_', '_');
    return obj;
}

rebuild(crack);



/* let's build THE FINAL LOGIC
    from step 1 and step 2 
        - one number is correct and well placed, one number is correct and wrong placed
            so 6 can't be correctly placed and wrong placed in the same time; we eliminate 6 from first two,
            and also we eliminate 6 from step3, because 6 doesn't take place in the code

    from step 4 - nothing is correct - we delete these numbers from the entire object

    ["_", "_", 2]
    ["_", 1, 4]
    [2, 0, "_"]
    ["_", "_", 0] 

*/

// *from step one - we find the first number for the 3rd position
const thirdNumber = document.getElementById('nr3').innerText = crack.arr1[2];

delete crack.arr1;

/* now we have
    ["_", 1, 4]
    [2, 0, "_"]
    ["_", "_", 0] 
*/

// from step 3 - two numbers are correct, but wrong placed [2, 0, "_"];

swapTwo = () => {
    crack.arr3[0] = 0;
    crack.arr3[1] = 2;
}

swapTwo();

/* new obj
    arr2:  ["_", 1, 4]
    arr3:  [0, 2, "_"]
    arr5:  ["_", "_", 0]
*/

/* 
    now for arr3  the correct order is [0, 2, "_"] - so both numbers are valid - but we also know that number 2 is the last 
    one(as we saw up in the code), and 0 is the first one and it matches also the 5th rule (one is correct but bad placed);
    - so 0 is the first one
*/



const firstNumber = document.getElementById('nr1').innerHTML = crack.arr3[0];
delete crack.arr3, delete crack.arr5;

/*  now we have arr2:  ["_", 1, 4] and it says : one is correct but wrong placed: What exactly does it mean ?
    we look at the last array(arr2) - ["_", 1, 4] - one is correct but wrong placed - we know the numbers for the
    first and the third positions of the code, and we need to know the number for the second pos

    since the statement says one is correct but wrong placed, 1 can't fill in the code because its correctly placed,
    so the number we are looking for is 4 (correct but wrong placed);

    * final answer: 4;

 */

 const secondNumber = document.getElementById('nr2').innerHTML = crack.arr2[2];
 delete crack.arr2;


 



