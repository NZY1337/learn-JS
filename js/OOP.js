// OOP CRASH COURSE

/////////////////////////////////////////////
// VERY IMPORTANT ------------------------ //
/////////////////////////////////////////////

// primitives - make a copy of the variable's value without changing its contet - only referint to it (undefined, string, boolean, null, number);
// objects  - make a copy of that variable's value - and it can change its value

// PRMTV
let maria = 10;
const cosmin = maria;
maria++;

// console.log(maria); // 11
// console.log(cosmin);// 10 copying that variable's value without changing it;

// OBJCTS
let changeMe = {
    val : 10
}

let changedValue = changeMe;
changeMe.val++;
// console.log(changeMe.val); // 11
// console.log(changedValue.val); // 11

let number = 10;
function changeNumber(num) {
    num++;
    console.log(num);
    let xy = num;
    // console.log(xy); 11
    return num;
    // num = 11; local scope;
}

let xy = number;
// console.log(xy); // 10; it makes only a copy of it;
// console.log(number); number = 10; globalScope
// console.log(changeNumber(number)); // 11 local scope


// VERY CAREFULLY - understand this - objects - we refer to the value of the same object
// WE ARE CHANGING THE VALUE OF THE SAME OBJECT - WE ARE PASSING THE SAME OBJECT
// we are not changing the value of a copy;

const changeObjVal = {
    car : 10
}

function changeObj(val) {
    val.car++;
    // console.log(val.car); 11

}
changeObj(changeObjVal); // calling the function 
console.log(changeObjVal.car); 



//  CLASSES JS ----------- 

// destructurated
class Person {
    constructor({name, location, married }) {
        this.name = name;
        this.location = location;
        this.married = married;
    }
}

const Andrei = new Person({name : 'Andrei', location: 'Bucharest', married: true});

/*
// undestructurated
class Car {
    constructor(type, doors, color, owner) {
        this.type = type;
        this.doors = doors;
        this.color = color;
        this.owner = owner;
        this.year = 2017;
    }
    
    carBought()  {
        return `I bought my car named ${this.type} in ${this.year}`;
    }
    
    getColor(){
        return `My car has ${this.color}`;
    }
}

const Audi = new Car('sedan', 4, 'black', 'Andrei Mocanu');


class Bmw {
    constructor(yearOfFabric, revision) {
        this.yearOfFabric = yearOfFabric;
        this.revision = revision;
    }
    
    revison() {
        return `My car is made in ${yearOfFabric}`;
    }
}

*/


// another way of creating Objects with functions
function createCircle(radius, width, borderWidth) {
    return {
        radius,
        width,
        borderWidth,
        height : width,
        calcArea() {
            return radius * width;
        }
    }
}

const circle1 = createCircle(10, 20, 18);
// console.log(circle1.calcArea()); etc..




// super trebuie sa aiba proprietatile constructorului parinte pe care vrem sa ne folosim;
// tot in constructorul subclasei putem pasa proprietati unice acelui nou obiect construit, care trebuiesc definite sub super();
// putem avea super() gol, dar in constructor alte proprietati decat prop parintelui
// super() adauga si metodele clasei Parinte
// metodele statice sunt metodele care sunt folosite doar de clasa Parinte nu de instanta acesteia---++++++++++++

// get * set
// set accept 1 param


class Square {
    // PROPS
    constructor(width, borderColor, dots, namee) {
        this.width = width;
        this.borderColor = borderColor;
        this.dots = dots;
        this.namee = namee;
        this.height = width;
        this.age = 20;
        this.area = width * this.height;
    }   

    // METHODS
    myDescription() {
        return `My square has borders ${this.borderColor}, named ${this.namee} with an area of ${this.area}`;
    }
    

    // GETTERS & SETTERS for width
    get mySquare() {
        const area = this.width * this.height;
        return `My Square has an aria of ${area} meters`;
    }

    // we now change the width fidth the 'w' param; 
    // iis a prop/method, we use '.' to acces the method 
    // square1.mySquare = '80'
    set mySquare(w) {
        return this.width = w;
    }
    

    // GETTERS & SETTERS for name;
    get mySquareName() {
        return `The name of this square is ${this.name}`;
    }
    
    set mySquareName(n) {
        this.name = n; 
    }

    // Static functions - used only on the parent, not by the call of the inheritance
    static equal(a, b) {
        return a.width * a.height === b.width * b.height;
    }
}




const square1 = new Square('Rocco', 30, 'red', true, 'My Happy Square');
console.log(square1.myName);
square1.mySquare = '80'; // w = 80 . changing the with value;
square1.mySquareName = 'Happy Square Changed'; // n = 'Happy Square Changed'
// console.log(square1.mySquare);
// console.log(square1.mySquareName);
console.log(square1.myDescription());


const square2 = new Square(44, 'black', false, 'My Soldier Square');
square2.mySquareName = 'Square 2 Changed';
// console.log(square2.mySquareName);


// TESTING Static Methods
// console.log(Square.equal(square1, square2)); // false



// subclases
class Triangle extends Square {
    constructor(namee, borderColor, l1) {
        super(namee, borderColor, l1); // props from ParentClassConstructor

        // props
        this.l1 = l1;
    }
    
    calcPerimeter() {
        return this.width + (this.l1 * 2);
    }
}

const triangle1 = new Triangle('Happy Triangle', 'brown', '21');
console.log(triangle1.namee);