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


// FORUM POSTS DISPLAY
const div = document.querySelector('#posts');
let startPostIndex = 0;
let nextPostsPos = startPostIndex + 5;
const next = document.querySelector('#next');
const current = document.querySelector('#current');
let firstPage = 1;
let postArr = [];


// display posts
async function getPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network response was not ok');
            
        }).then(data => {
           data.map(function(post){
                postArr = [...postArr, post];
           });
           
        }).catch(err =>{
            alert('There has been a problem with your fetch operation: ', err.message);
        })
}


function displaPosts() {
   postArr.slice(startPostIndex, nextPostsPos).map((posts, index) =>{ 
        let renderpost = 
        `
            <div class="col-lg-8">
                <ul>
                    <h5 class="">Title </b>${posts.title} ${index+= 1}</b></h5>
                    <p class="bg-dark p-4 text-white body">${posts.body}</p>
                </ul>
            </div>
        `   
        div.innerHTML += renderpost
    })
    console.log(postArr);
}

(async () =>{
    await displaPosts();
    await getPosts();
})();


function prevPost(jsn) {
    prev.addEventListener('click', function(e){
        
        displaPosts(posts)

        startPostIndex -=5;
        nextPostsPos -=5;
        firstPage-=1;
        current.innerHTML = firstPage;
    });
}