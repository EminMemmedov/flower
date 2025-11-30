// Wait for the page to fully load
window.addEventListener('load', () => {
    // Small delay to ensure the browser has rendered the initial state
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    // Generate Fireflies
    const firefliesContainer = document.querySelector('.fireflies');
    const fireflyCount = 30;

    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');

        // Random position
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';

        // Random animation properties
        firefly.style.animationDuration = (Math.random() * 5 + 5) + 's, ' + (Math.random() * 2 + 1) + 's';
        firefly.style.animationDelay = Math.random() * 5 + 's';

        firefliesContainer.appendChild(firefly);
    }

    // Moon Emojis
    const emojis = ['❤️', '💖', '💘', '💕', '💓', '💗', '💞', '💟', '😍', '😘'];

    function createMoonEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('moon-emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Random direction for burst (mostly downwards/leftwards since moon is top right)
        // tx: -10vmin to +2vmin (Reduced distance)
        // ty: -2vmin to +10vmin (Reduced distance)
        const tx = (Math.random() * 12 - 10) + 'vmin';
        const ty = (Math.random() * 12 - 2) + 'vmin';

        emoji.style.setProperty('--tx', tx);
        emoji.style.setProperty('--ty', ty);

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }

    // Erupt every 1.2 seconds
    setInterval(createMoonEmoji, 1200);

    // Heart Shooting Stars
    function createHeartStar() {
        const star = document.createElement('div');
        star.classList.add('heart-star');

        // Random start position (mostly top right)
        star.style.left = (Math.random() * 50 + 50) + '%';
        star.style.top = (Math.random() * 50) + '%';

        // Random delay and duration
        star.style.animationDuration = (Math.random() * 1 + 1.5) + 's';

        document.body.appendChild(star);

        // Remove after animation
        setTimeout(() => {
            star.remove();
        }, 2500);
    }

    // Create a heart star every few seconds
    setInterval(createHeartStar, 2000);

    // Mouse Trail
    document.addEventListener('mousemove', (e) => {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        // Random color for sparkles
        const hue = Math.random() * 360;
        particle.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 80%), transparent)`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    });
});

// Fallback: If load event doesn't fire for some reason (e.g. some preview environments), try DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1500);
});
