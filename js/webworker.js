// asadar, exercitiu:
// 1. avem un input type file, multiple
// 2. la change, se citesc referintele
// 3. se trimit catre web worker
// 4. worker-ul citeste continutul si trimite inapoi cate o imagine procesata
// 5. app primeste imaginea si o afiseaza intr-o galerie foto
// 6. galeria afiseaza thumbnails (you can use flexbox for the layout)
// 7. la click pe un thumb, imaginea se afiseaza la dimensiunea originala 
// (puteti sa impartiti ecranul in 2: o parte galerie, o parte imaginea la dimensiuni reale SAU puteti afisa imaginea la dimensiuni reale intr-un fel de "modal" - poate chiar un native dialog element)
 // select what we need

const input = document.querySelector('input');
const res = document.querySelector('#result');
const asd = document.querySelector('#asd');
const btn = document.querySelector('#close');
const modal = document.querySelector('#my-Modal');
const changeImg = document.querySelector('.modal-body img');
const modalTitle = document.querySelector('#exampleModalLongTitle');


// setting our worker file
const myWorker = new Worker('js/workers-practice.js');

// add event listener for input
input.addEventListener('change', async function(e) {
    
    // create new fileReader
    const fileReader = Array.from(e.target.files);
    
    myWorker.postMessage(fileReader);
    console.log('message has been sent');
});

myWorker.addEventListener('message', async function(e){
    const reader = new FileReader();
    
    const imagesFromWorker = e.data;

    for (let i in imagesFromWorker) {
        console.log(imagesFromWorker[i]);
        const imgTitle = imagesFromWorker[i].name;
        
        try {
            const resFileReader = await fileReader(reader, imagesFromWorker[i]);
           
            createImg(resFileReader, imgTitle);
        } catch(err) {
            console.log(err);
        }
    }
})

 // setting up the promise
 function fileReader(reader, file) {
    return new Promise((resolve, reject) =>{
        reader.onerror = err => reject(err);
        reader.onload = e => {
            setTimeout(() => {
                resolve(e.target.result);
            });
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
}

// add Title Function
function addTitle(el, title) {
    const x = title.split('-');
    x.pop();
    let finalT = x.join(' ');
    el.innerHTML = title;
    el.innerHTML = finalT;
}