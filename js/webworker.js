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
// setting our worker file
const myWorker = new Worker('js/workers-practice.js');

document.addEventListener('load', () =>{
    alert('hello world');
});

// add event listener for input
input.addEventListener('change', async function(e) {
    
    // create new fileReader
    const fileReader = Array.from(e.target.files);
    console.log(typeof fileReader);
    myWorker.postMessage(fileReader);
    console.log('message has been sent');
});

myWorker.addEventListener('message', async function(e){
    const reader = new FileReader();
    const imagesFromWorker = e.data;
    for (let i in imagesFromWorker) {
        try {
            const resFileReader = await fileReader(reader, imagesFromWorker[i]);
            const div = document.createElement('div');
            
            div.classList.add('col-lg-5', 'p-3');
            console.log(div);
            const img = document.createElement('img');
            img.classList.add('img-fluid');
            img.src = resFileReader;
            div.appendChild(img);
            asd.appendChild(div);
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