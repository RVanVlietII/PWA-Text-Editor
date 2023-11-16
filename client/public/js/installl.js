const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility ='visible';
    butInstall.textContent = 'Install me Now!'


});

butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled',true);
    butInstall.textContent = 'Install Complete!'


});


window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    console.log('Installation Complete')


});
