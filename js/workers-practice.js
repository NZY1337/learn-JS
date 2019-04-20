self.addEventListener('message', function(e){
    console.log('message received');
    const workerRes = e.data;
    postMessage(workerRes);
})

