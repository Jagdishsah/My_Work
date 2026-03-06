document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .archive-item, .section-title');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Subtle background glow movement
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.bg-glow');
        const x = e.clientX / window.innerWidth * 20;
        const y = e.clientY / window.innerHeight * 20;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
});
