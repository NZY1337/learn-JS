// DO->while
let x = 0; //initial was 0 but 5 helped me to understand better the importance of where should write the increment
let y = 0;

do {
    x++;
    //console.log('hello world: ' + x + ', number of loops: ' + y++); 
    // x++;
} while (x <= 4); 
  

/*
    (NE DUCE IN EROARE INCREMENTUL DAR EA RULEAZA DE ACELASI NUMAR DE ORI - ADICA 4);
    // IN ORDER TO VERIFY ~the condition~ WE NEED TO CHECK AT LEAST ONCE RIGHT ?
    // in both cases the roop will run at least once:
    -- if we increment the loop from the start, as the loop already runs once, 'x' will be 5;
       at this type of loop it is important where we add the increment:
    -- if we increment the loop before the statement, loop loops 1 more time ( <= 10);
      because from the start we specify to increment x with 1, and than we start the counter;
      // 9 loops

    - if we increment the loop after the statement, loop will behave normally
      // 8 loops - correct way
*/

// COURSE EXERCISE

// let ask = 0;

// let question = prompt('How many examns do you have left?');

// do {
//     console.log('Please come in: ' + ask);
//     ask++;  
// } while (ask < Number(question));


let z = 0;
for (let i = 0; i < 5; i++) {
    // console.log('hello: ' + z); example refference for a better understanding of do/while;
    z++;
}

// even number
let even = 0;

do {
    // console.log('Even numbers: ' + even);
    even+=2;
    // if (even % 2 === 0) // also even number
} while (even <= 30);



// WHILE LOOP

let q = 10;

while (q > 0) {
    // console.log('hello  world: ' + q);
    q--;
}

/*
const howMany = prompt('How many times should I loop?');
let answer = 0;

while (answer < howMany) {
    console.log('tellmeyournumber: ' + answer);
    answer++;
}
*/


// Secret Answer - code exercise

let secret = 'javascript'
const who = 'javascript';

while (who != secret) {
    console.log('You crack up the code');
    break;
} 

let banana = prompt('Whow many calories do you eat');
let bananaCalroies = 89;
let total = 0;
for (let fruit = 1; fruit <=  Number(banana); fruit++) {
    bananaCalroies+=2;
    total+=bananaCalroies;
    let banaaanas = fruit == 1 ? 'banana 1' : 'bananas';
    console.log('You ate ' + fruit + ` ${banaaanas} with ` + `${total} calories`);
}

