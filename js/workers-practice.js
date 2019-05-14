self.addEventListener('message', function(e){
    console.log('message received');
    const workerRes = e.data;

    // send data back to worker;
    postMessage(workerRes);
})

