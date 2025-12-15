// Letter Animation with Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const highlight = entry.target;
        if (entry.isIntersecting) {
            highlight.classList.add('animate');
        } else {
            highlight.classList.remove('animate');
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        observer.observe(highlight);
    }
});