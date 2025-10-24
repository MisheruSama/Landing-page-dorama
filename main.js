// ScrollReveal para títulos principais
window.addEventListener('DOMContentLoaded', function() {

    if (typeof ScrollReveal !== 'undefined') {
        // h1 com delay de 5 segundos
        ScrollReveal().reveal('.content h1', {
            duration: 1200,
            origin: 'bottom',
            distance: '60px',
            easing: 'ease',
            reset: false,
            opacity: 0,
            scale: 0.9,
            delay: 3000
        });
        // h2 logo após o h1
        ScrollReveal().reveal('.content h2', {
            duration: 1200,
            origin: 'bottom',
            distance: '40px',
            easing: 'ease',
            reset: false,
            opacity: 0,
            scale: 0.95,
            delay: 4000 // começa após o h1
        });
        // botão após os títulos
        ScrollReveal().reveal('.content button', {
            duration: 1200,
            origin: 'bottom',
            distance: '30px',
            easing: 'ease',
            reset: false,
            opacity: 0,
            scale: 0.97,
            delay: 4700 // aparece após h2
        });
        // reveal para todos os cards
        ScrollReveal().reveal('.card', {
            duration: 1200,
            origin: 'bottom',
            distance: '60px',
            easing: 'ease',
            reset: true,
            opacity: 0,
            scale: 0.98,
            interval: 300,
            delay: 500 // cards aparecem depois do botão
        });
    }

    // Scroll suave ao clicar no botão
    document.querySelector('.comeco').addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.getElementById('comeco');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
