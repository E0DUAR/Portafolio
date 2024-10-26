// Seleccionar el botón y el elemento body
const toggleButton = document.getElementById('toggle-theme');
const bodyElement = document.body;

// Función para alternar el tema
function toggleTheme() {
    bodyElement.classList.toggle('dark-mode');
}

// Escuchar el evento de clic en el botón
toggleButton.addEventListener('click', toggleTheme);



document.querySelectorAll('.skill__item').forEach(item => {
    item.addEventListener('mouseover', () => {
        const description = item.querySelector('.skill-description');
        description.style.display = 'block'; // Muestra la descripción al pasar el mouse
    });

    item.addEventListener('mouseout', () => {
        const description = item.querySelector('.skill-description');
        description.style.display = 'none'; // Oculta la descripción al salir el mouse
    });
});
