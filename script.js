// ==================== SCROLLREVEAL PARA MENSAJES ====================

document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal();

    // Mensajes secundarios (todas las columnas)
    sr.reveal('.mensaje', {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,      // Más suave
        easing: 'cubic-bezier(0.77,0,0.175,1)', // Easing suave
        interval: 80,       // Intervalo moderado
        opacity: 0,
        reset: false
    });

    // Mensaje principal
    sr.reveal('.mensaje-principal', {
        origin: 'bottom',
        distance: '40px',
        duration: 1400,     // Más suave
        easing: 'cubic-bezier(0.77,0,0.175,1)',
        opacity: 0,
        reset: false
    });

    // Desplazamiento horizontal aleatorio y animado
    document.querySelectorAll('.mensaje').forEach(msg => {
        const desplazamiento = Math.floor(Math.random() * 301) - 150;
        msg.style.transform = `translateX(${desplazamiento}px)`;
        msg.style.transition = 'transform 0.8s cubic-bezier(.68,-0.55,.27,1.55)';
    });
});

// ==================== FIN SCROLLREVEAL ====================

