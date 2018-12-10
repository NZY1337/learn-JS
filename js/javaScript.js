// Function constructor

// Main object

var john = { 
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}



//when we write a function constructor we write the var with capital letter
var Person = function (name, yearOfBirth, job) {  // Object constructor. pe baza lui cream alte obiecte care au aceleasi proprietati ca ale lui John (Obiectul principal)
      this.name = name; //propreties
      this.yearOfBirth = yearOfBirth;
      this.job = job;
      
      /*
      
      when we use prototype it's not necessary to write all these function in the interior of the Object constructor
      this.calculateAge  = function() { 
          console.log(2016 - this.yearOfBirth);
      } 
      
      */
}


Person.prototype.calculateAge = function() { //methods - functions from objects are called methods
          //console.log(2016 - this.yearOfBirth);
}


Person.prototype.lastName = 'Smith'; // we can add also properties but it is not ok because all the instance objects will inherit that value;
                                     // obj.Mark = Mark Smith; obj.Jane = Jane Mark; obj.Adi = Adi Mark
                              

// create an instance of John's object
var Mark = new Person('Mark', 1990, 'teacher'); 
var Jane = new Person('Jane', 1995, 'pornStar');
var Adi = new Person('Adi', 2010, 'child');



Mark.calculateAge();
Jane.calculateAge(); 
Adi.calculateAge();


/*
  console.log(Mark.lastName);
  console.log(Jane.lastName);
  console.log(Adi.lastName);

*/



// Main object
var getYourLifeGoals = {
    name: 'Andrei',
    dreamCar: 'Audi A4',
    ocupation: 'webDev',
    salary: 2000,
    yearOfBirth:1990,
    whatIsAndrei: function() {
        return 'Andrei is ' + this.ocupation;
  }
}

// Function constructor

var Goal = function(name, dreamCar, ocupation, salary, yearOfBirth) {
    this.name = name;
    this.dreamCar = dreamCar;
    this.ocupation = ocupation;
    this.salary = salary;
    this.yearOfBirth = yearOfBirth;
}

// Object prototype
Goal.prototype.living = function() {
    console.log( 'Cristi is ' + this.ocupation);
}

// Instances of the object

// new object Cristi
var cristi = new Goal ('Cristi', 'bmw', 'pensionar', 1000, 1989);
    cristi.yearsUntiRetirement = function() {
        var retirementAge = 65;
        var calculateAge = 2018 - this.yearOfBirth;
        return retirementAge - calculateAge;
    }
    
    var getCristisYearsOfRetirement =  cristi.yearsUntiRetirement();
         
  
// start object anna
var anna = new Goal('Anna', 'Peugeot', 'designer', 1500, 1992);
    anna.parrents = ['dad', 'mom', 'sister']; //adding props or functions
    anna.getSex = function () {
        var sex = 'woman';
        if (sex === 'man') {
            console.log('Anna is a man, and it is wired');
        } else if (sex === 'woman') {
           console.log('Anna is a woman, and its good');
        } else {
           console.lg("Anna doesn't exist");
        }
    }
    
    anna.yearsUntilRetirement = function () {
        var retirementAge = 60;
        var calculateAge = 2018 - this.yearOfBirth;
        return retirementAge - calculateAge;
    }
    
   var getAnnasYearsOfRetirement =  anna.yearsUntilRetirement();
      
// finish object Ana
   
 
function compareYearsOfRetirement() {
    if (getAnnasYearsOfRetirement > getCristisYearsOfRetirement) {
      console.log('Anna has a few more years to work than Cristi until she gets retired')
    } else if (getAnnasYearsOfRetirement < getCristisYearsOfRetirement) {
      console.log('Anna has less years to work than Cristi until she gets retired');
    } else {
      console.log('both person have to work the same amount of years until retirement');
    }
}

// compareYearsOfRetirement(); 






 










































