
// Game's LOGIC

const defaultPic = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LokF26kDxfCfGl8d-yu6kn6OHvroi90VRdXt20BOUjP7gAaL'
];

const chosenPics = [
    {
        src:  'data:image/png;base64,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',
    },
    
    {
        src: 'https://cdn.pixabay.com/photo/2013/07/13/10/32/bad-157437_960_720.png',
    },

    {
        src: 'https://previews.123rf.com/images/carmenbobo/carmenbobo1506/carmenbobo150600542/41642909-rubber-stamp-with-word-done-inside-vector-illustration.jpg'
    },

    {
        src:  'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/shutterstock_344519003-796x565.jpg'
    }
];


const gameContainer = document.querySelector('#game');
const score = document.querySelector('#score');
const yourMove = document.querySelector('#yourMove');
const gameStatus = document.querySelector('#gameStatus');
console.log(yourMove, gameStatus);
let initialScore = 0;
score.innerHTML = 0;

function createHtml() {
    // create the div wrappers for the game
    const row = document.createElement('div');
    row.classList.add('row', 'justify-content-center');
   
    const col = document.createElement('div');
    col.classList.add('col-lg-10', 'text-center');

    row.appendChild(col);
    
    gameContainer.appendChild(row);
  

   for (let i = 0; i < 10; i++) {
        // create the html game inner
        const flippedContainer = document.createElement('div');
        flippedContainer.classList.add('flipped-container');

        const flippedContainerIner = document.createElement('div');
        flippedContainerIner.classList.add('flipped-container-inner');

        flippedContainer.appendChild(flippedContainerIner);
        col.appendChild(flippedContainer);
        
        const flippedContainerFront = document.createElement('div');
        flippedContainerFront.classList.add('flipped-container-front');

        const flippedContainerBack = document.createElement('div');
        flippedContainerBack.classList.add('fipped-container-back');

        flippedContainerIner.appendChild(flippedContainerFront);
        flippedContainerIner.appendChild(flippedContainerBack);
        col.appendChild(flippedContainer);  
        
   }

   return gameContainer.innerHTML;
}

createHtml();

const containers = document.querySelectorAll('.flipped-container');
const containerInner = document.querySelectorAll('.flipped-container-inner');


// flip to second pic
function addFlippEffect() {
    for (let i = 0; i < containers.length;i++) {
        containers[i].addEventListener('click', function(e){
               containerInner[i].classList.add('classRotate');
               setTimeout(addTimer(i));
            });
    }
}

addFlippEffect();

// after 2 sec get back to first img
function addTimer(index) {
    setTimeout(function(){
        containerInner[index].classList.remove('classRotate');
    },2000);
}

let guessed = [];


// set the back Randomed Image FUNCTION
function setBackImgRandomly() {
    for (let i = 0; i < containers.length;i++) {
        const backImgHolder = document.querySelectorAll('.fipped-container-back');
        
        const createBackImg = document.createElement('img');
        backImgHolder[i].appendChild(createBackImg);
        
        containers[i].addEventListener('click', function(e){
            const index = Math.floor(Math.random() < 0.5) ? 0 : 1;
            createBackImg.setAttribute('src', chosenPics[index].src);
            guessed.push(index);
            win();
        });
    } 
} 

setBackImgRandomly();



function win() {
    if (guessed.length == 2 && guessed[0] == guessed[1]) {
        gameStatus.innerHTML = 'Game Staus: <span class="text-white win">Win</span>';
        setTimeout(function(){
            console.log('win');
            initialScore += 10;
            score.innerHTML = initialScore;

            if (initialScore >= 30) {
                alert('You won');
                initialScore = 0;
                gameStatus.innerHTML = 'Game Status: ';
                score.innerHTML = initialScore;
            }
        }, 1000);
        guessed = [];
        
    } else if (guessed.length >= 2 && guessed[0] !== guessed[1]) {
        gameStatus.innerHTML = 'Game Staus: <span class="text-white win">Loss</span>';
        setTimeout(function(){
            console.log('loose');
            initialScore -= 10;

            if (initialScore < 0) {
                alert('you lost')
                initialScore = 0;
                gameStatus.innerHTML = 'Game Status: ';
            }
            score.innerHTML = initialScore;
        }, 1000);
        guessed = [];
    }
}

function removeAllBackPics() {
    const images = document.querySelectorAll('img');
    for (let i of images) {
        i.removeAttribute('src');
    }
    console.log(guessed);
}

