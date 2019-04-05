// Async ; Await; Fetch 

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');   
    const data = await res.json();
}

getUsers();