
const input = document.querySelector('input');
const res = document.querySelector('#result');
const asd = document.querySelector('#asd');
const btn = document.querySelector('#close');
const modal = document.querySelector('#my-Modal');
const changeImg = document.querySelector('.modal-body img');
const modalTitle = document.querySelector('#exampleModalLongTitle');
const reader = new FileReader();

// set our worker file
const myWorker = new Worker('js/workers-practice.js');

// input sending data to worker;
input.addEventListener('change', async function(e) {
    
    // create new fileReader
    const fileReader = Array.from(e.target.files);
    
    // sent data to fileReader;
    myWorker.postMessage(fileReader);
    console.log('message has been sent');
});


// get data from the worker
readDataFromWorker = async (e) => {
    const imagesFromWorker = e.data;
    
    for (let i in imagesFromWorker) {
        const imgTitle = imagesFromWorker[i].name;
        
        try {
            const resFileReader = await fileReader(reader, imagesFromWorker[i]);
            createImg(resFileReader, imgTitle);

        } catch(err) {
            console.log(err);
        }
    }
}

// get data from the worker
myWorker.addEventListener('message', readDataFromWorker);

 // setting up the promise
 function fileReader(reader, file) {
    return new Promise((resolve, reject) =>{
        reader.onerror = () => reject('pula poze :))');
        reader.onload = e => {
            setTimeout(() => {
                resolve(e.target.result);
            }, 1000);
        }
        reader.readAsDataURL(file);
    });
}   

// form reset pt a reseta totul


// display images from FileReader 
function createImg(filereader, imgTitle) {
    const div = document.createElement('div');
    const modalParent = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    div.appendChild(p);

    img.classList.add('img-fluid');
    modalParent.appendChild(img);
    
    div.classList.add('col-lg-6', 'col-sm-6', 'col-md-6', 'p-3');
    img.src = filereader;
    div.appendChild(modalParent);
    asd.appendChild(div);
    
    div.setAttribute('data-toggle', 'modal');
    div.setAttribute('data-target', '#exampleModalCenter');
    
    // addModal
    div.addEventListener('click', addThumbnail);
    // add title function
    addTitle(p, imgTitle);
}

// add img to Modal
function addThumbnail() {
    changeImg.src = this.querySelector("img").src;
    modalTitle.innerHTML = this.querySelector('p').innerHTML;
}

// add Title Function
function addTitle(el, title) {
    const x = title.split('.');
   
    x.pop();
    console.log(x);
    let finalT = x.join(' ');
    el.innerHTML = finalT;
}


