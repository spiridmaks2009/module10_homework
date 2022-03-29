const button = document.querySelector('.btn');

button.addEventListener('click', async () => {
    const message = 'window.screen.width = ' + window.screen.width +
                    '\nwindow.screen.height = ' + window.screen.height +
                    '\nwindow.innerWidth = ' + window.innerWidth +
                    '\nwindow.innerHeight = ' + window.innerHeight;
    alert(message);
    console.log('end');
})