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

    // Scroll suave ao clicar no botão e tocar a música
    document.querySelector('.comeco').addEventListener('click', function(e) {
        e.preventDefault();

        // Tenta tocar o áudio - playback deve ser permitido após interação do usuário
        var audio = document.getElementById('bg-music');
        var toggle = document.getElementById('audio-toggle');
        function showAudioToggle() {
            if (toggle) {
                toggle.hidden = false;
                var icon = toggle.querySelector('.audio-icon');
                if (icon) icon.textContent = '⏸';
                toggle.title = 'Pausar música';
            }
        }

        if (audio) {
            var playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    // reprodução iniciada com sucesso
                    showAudioToggle();
                }).catch(function(err) {
                    // Falha ao reproduzir (política do navegador, formato inválido, etc.)
                    console.warn('Falha ao iniciar a reprodução do áudio:', err);
                });
            } else {
                // browsers antigos que não retornam promise - assumir que iniciou
                showAudioToggle();
            }
        }

        // Toggle play/pause when user clicks the discreet control
        if (toggle) {
            toggle.addEventListener('click', function(ev) {
                ev.stopPropagation();
                if (!audio) return;
                if (audio.paused) {
                    var p = audio.play();
                    if (p !== undefined) p.catch(function(err){ console.warn('Erro ao reproduzir:', err); });
                    var iconPlay = toggle.querySelector('.audio-icon');
                    if (iconPlay) iconPlay.textContent = '⏸';
                    toggle.title = 'Pausar música';
                } else {
                    audio.pause();
                    var iconPause = toggle.querySelector('.audio-icon');
                    if (iconPause) iconPause.textContent = '▶';
                    toggle.title = 'Reproduzir música';
                }
            });
        }

        const section = document.getElementById('comeco');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
