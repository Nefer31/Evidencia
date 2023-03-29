const comprarBtn = document.getElementById('comprar');
const mensajeDiv = document.querySelector('.message');

comprarBtn.addEventListener('click', () => {
mensajeDiv.classList.remove('hidden');
});