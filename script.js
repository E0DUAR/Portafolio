// Seleccionar el botón y el elemento body
const toggleButton = document.getElementById('toggle-theme');
const bodyElement = document.body;

// Función para alternar el tema
function toggleTheme() {
    bodyElement.classList.toggle('dark-mode');
}

// Escuchar el evento de clic en el botón
toggleButton.addEventListener('click', toggleTheme);
