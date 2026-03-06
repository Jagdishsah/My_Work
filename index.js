/**
 * JAGDISH SAH - Master Archive JS
 * Designed for transparency and interaction.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cursor Glow Follow
    const glow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // 2. Console Credits (Transparency)
    console.log("%c PROJECT_ARCHIVE_INITIALIZED ", "background: #00f2ff; color: #000; font-weight: bold;");
    console.log("Core Logic: Gemini (Google)");
    console.log("Styling & Structure: ChatGPT (OpenAI)");
    console.log("Human Oversight: Jagdish Sah");
    console.log("Status: Under Construction. Please report broken links.");

    // 3. Simple Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .archive-row').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Animation Class Helper
const style = document.createElement('style');
style.innerHTML = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
