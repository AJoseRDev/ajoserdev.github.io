// 1. Efecto Typewriter
const textElement = document.getElementById('typewriter');
const word = "Developer";
let index = 0;

function type() {
    if (index < word.length) {
        textElement.textContent += word.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}
window.onload = type;

// 2. Fondo interactivo con el mouse
const bg = document.getElementById('bg-canvas');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    bg.style.setProperty('--x', `${x}%`);
    bg.style.setProperty('--y', `${y}%`);
});

// 3. Scroll suave (Incluye el botón del Hero)
document.querySelectorAll('a[href^="#"], .scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 4. Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
