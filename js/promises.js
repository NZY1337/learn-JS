// Async ; Await; Fetch 

function doubleAfterSeconds(x) {
    return new Promise(res =>{
        setTimeout(() => {
            res(x * 2);
        }, 1000);
    })
}

doubleAfterSeconds(20).then(r =>{
    // console.log(r);
});
// will log the response after 1 sec

async function getAsyncFunction() {
    const a = await doubleAfterSeconds(20);
    const b = await doubleAfterSeconds(30);
    const c = await doubleAfterSeconds(40);
    const sum = a + b + c;
    // console.log(sum);
}

getAsyncFunction();

// will log the resonse after 3 sec - 1sec + 1sec + 1sec;

/*
    Now that you’ve created an async function, we can make use of the await 
    keyword which will pause our code until the Promise has resolved. Here’s how easy that is:
*/




const url = 'https://jsonplaceholder.typicode.com/posts';
const container = document.querySelector('#wrapper');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const pageNum = document.querySelector('#page-num');

pageNum.innerHTML = 1;

let secondP = 5;
let firstP = 0  ;
let postHolder = [];

console.log(firstP);
console.log(secondP);

// init the eventListeners
(() =>{
    next.addEventListener('click', nextPost);
    prev.addEventListener('click', prevPost);
})()


// fetching data from server
function GetUrlClass(link){
    const fetched = fetch(link);
    let postHolder = [];
    
    fetched
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            data.slice(firstP, secondP).forEach((item, index)=>{
                postHolder += 
                    `
                        <div class="posts bg-dark m-3 p-3 text-white" id="index_${index}">
                            <small class="text-danger">${item.id}</small>
                            <h5>${item.title}</h5>
                            <p>${item.body}</p>
                        </div>
                    `
           });
           container.innerHTML = postHolder;
        })
        .catch(err => {
            console.log(err);
        })
}

GetUrlClass(url);


// nextPost function
function nextPost () {
    container.classList.add('fadeIn');

    setTimeout(function() {
        container.classList.remove('fadeIn');
    }, 300);

    if (firstP == 95 && secondP == 100) {
        container.classList.remove('fadeIn');
        return false;
    }

    secondP += 5;
    pageNum.innerHTML ++;
    firstP += 5;

    GetUrlClass(url);
}    
        
// prevPost function
function prevPost(e) {
    container.classList.add('fadeIn');
   
    setTimeout(function() {
        container.classList.remove('fadeIn');
    }, 300);

    console.log(firstP);
    console.log(secondP);

    if (firstP == 0 && secondP == 5) {
        container.classList.remove('fadeIn');
        return false;
    }

    pageNum.innerHTML--;
    secondP -= 5;
    firstP -= 5;
    GetUrlClass(url);
}














