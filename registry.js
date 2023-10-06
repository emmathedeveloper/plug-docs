
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('worker.js').then(registration => {
        //console.log('Worker registered...')
        //console.log(registration)
    })
}