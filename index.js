/**
 * JAGDISH SAH ARCHIVE SYSTEM v1.0
 * Collaboration: Jagdish (Architect) + Gemini (Logic)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal Easter Egg (Viewable in Inspect -> Console)
    console.log("%c SYSTEM INITIALIZED ", "color: #000; background: #06b6d4; font-weight: bold; padding: 5px; border-radius: 3px;");
    console.log("%c Builder: Jagdish Sah %c Logic: Gemini %c UI: ChatGPT ", "color: #cbd5e1;", "color: #06b6d4;", "color: #10b981;");
    console.log("Status: Fully Transparent. AI-Augmented Development in effect.");

    // 2. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Apply animation to cards and archive items
    const elementsToReveal = document.querySelectorAll('.card, .archive-item, .section-title, .ai-chip');
    
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        revealOnScroll.observe(el);
    });

    // 3. Dynamic Background Movement
    const glow = document.querySelector('.bg-glow');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 30; // Move up to 30px
        const y = (e.clientY / window.innerHeight) * 30;
        
        if (glow) {
            glow.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // 4. Hover Sound/Haptic Simulation (Visual only)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent)';
            card.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            card.style.boxShadow = 'none';
        });
    });
});

// Helper for CSS visibility
const style = document.createElement('style');
style.innerHTML = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
