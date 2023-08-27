const img = document.querySelector('img');
const zoomInButton = document.getElementById('zoom-in-button');

zoomInButton.addEventListener('click', () => {
  img.style.transform = 'scale(1.2)';
});