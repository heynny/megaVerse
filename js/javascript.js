let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Regresar al último
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volver al primero
    }

    const offset = -currentIndex * 100; // Moverse en porcentaje
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Mover el carrusel automáticamente cada 5 segundos
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Función para desplazar suavemente a una sección específica
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Asignar eventos de clic a los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const sectionId = link.getAttribute('href').substring(1); // Obtener el ID de la sección
        scrollToSection(sectionId); // Desplazarse a la sección
    });
});
