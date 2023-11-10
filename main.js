if ('serviceWorker' in navigator) {
    console.log('Service Worker funcionando');

    // Cargar el Service Worker
    navigator.serviceWorker.register('sw.js')
        .then(res => console.log('Service Worker cargado correctamente', res))
        .catch(err => console.log('Service Worker no se ha podido registrar', err));
} else {
    console.log('Aún no lo puedes usar');
}
