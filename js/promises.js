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
const size = 5;

// display posts
async function getPosts() {
     await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Network response was not ok');
        }).then(myJson => {
            
             myJson.slice(0, size).map(posts =>{ 
                 allPosts.push(posts);
                let renderpost= `
                    <div class="col-lg-8">
                        <ul>
                            <h5 class="">Title </b>${posts.title}</b></h5>
                            <p class="bg-dark p-4 text-white body">${posts.body}</p>
                        </ul>
                    </div>
                `   
                div.innerHTML += renderpost
            })

        }).catch(err =>{
            alert('There has been a problem with your fetch operation: ', err.message);
        })
}

getPosts();
