const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// length = 25, it starts to count from 0, but random output the length - 1, but the first index starts from 0;
// so 25 - 1(24) = 24(letter array count at 0 index);
// the count starts from 0, not 1; length = 25, countdown starts from 0 index(so if we start counting from 0, we have 24length(widthout+1))


const allRandomedArrays = [];

function getRandom(arrLetters, arrNumbers) {
    // default arrays
    const randomLowerCase1 = Math.floor(Math.random() * letters.length);
    const randomLettersUppercase1 = Math.floor(Math.random() * letters.length);
    const randomLettersUppercase2 = Math.floor(Math.random() * letters.length);
    const randomNumbers = Math.floor(Math.random() * numbers.length);

    // final arrays
    const finalRandomLettersLower = arrLetters[randomLowerCase1];
    const finalRandomLettersUppercase1 = arrLetters[randomLettersUppercase1];
    const finalRandomLettersUppercase2 = arrLetters[randomLettersUppercase2];
    const fnalRandomNumbers = arrNumbers[randomNumbers];
    
    allRandomedArrays.push(finalRandomLettersLower, fnalRandomNumbers, finalRandomLettersUppercase1, finalRandomLettersUppercase2);
    return allRandomedArrays;
}

getRandom(letters, numbers);

function getArrUpperCase(arr) {
    const uppered = arr[3].toUpperCase();
    arr.pop();  
    arr.push(uppered);
    return arr;
}

getArrUpperCase(allRandomedArrays);
 
shuffePos = (arr) => {
    for (i in arr) {
        const random = Math.floor(Math.random() * arr.length);
        let initPos = arr[i];
        arr[i] = arr[random];
        arr[random] = initPos;
    }
    return arr;
}

console.log(allRandomedArrays);
// display kaptcha HTML
const kaptchaArr = shuffePos(allRandomedArrays);
const kaptcha = document.getElementById('kaptcha');

function displayKaptcha() {
    kaptcha.innerHTML = allRandomedArrays.join("");
    return kaptcha.innerText;
}

kaptcha.innerText = displayKaptcha();


/* form */
const form = document.forms['myform'];
const inputTypeText = document.querySelectorAll("input[type='text']");
const inputTypeNumber = document.querySelector("input[type='number']");
const textArea = document.querySelector('textarea');
const small = document.querySelector('small');
const submitBtn = document.querySelector("input[type='submit']");
const alertKaptcha = document.querySelector('#alert-captcha')
const kaptchaInput = document.getElementById('kaptchaValidate');
const reloadKaptcha = document.querySelector("input[type='button']");


reloadKaptcha.addEventListener('click', function(){
   return shuffePos(allRandomedArrays);;
});

form.addEventListener('submit', function(e){
    if (displayKaptcha() !== kaptchaInput.value) {
        alertKaptcha.innerHTML = 'match kaptcha';
        console.log('fail');
        e.preventDefault();
    } 
   
   if (Number(inputTypeNumber.value.length) < 1) {
       inputTypeNumber.classList.add('borderDanger'); 
       small.innerText = 'mandatory';
       e.preventDefault();
   }
   
   for (let input of inputTypeText) {
        if (input.value.length < 1) {
            input.classList.add('borderDanger');
            e.preventDefault();
        }
    }
});


(function () {
    for (let input of inputTypeText) {
        input.addEventListener('keyup', function(e){
            if (this.value.length  != 0) { 
                this.classList.add('validBorder') 
            } else if (this.value.length < 1) {
                this.classList.remove('validBorder');
                this.classList.add('borderDanger'); 
            }
        });
    }
    kaptchaInput.addEventListener('keyup', function(){
        if (this.value === displayKaptcha()) {
            alertKaptcha.innerHTML = 'succes';
        } 
        
    });
    
    inputTypeNumber.addEventListener('keyup', function(e){
        if (this.value.length  != 0) { 
            this.classList.add('validBorder');
            small.innerText = 'valid'; 
        } else if (this.value.length < 1) {
            this.classList.remove('validBorder');
            this.classList.add('borderDanger'); 
        }
    });
    
    textArea.addEventListener('keyup', function(e){
        if (this.value.length  != 0) { this.classList.add('validBorder') }
    });

}());

