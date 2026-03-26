// Efecto de aparición suave al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    // Estilos iniciales antes de la animación
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease-out";
    observer.observe(el);
});

// Clase activa para activar la animación
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        const speed = 0.5;
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});