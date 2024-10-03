document.addEventListener('DOMContentLoaded', function () {
    const catImage = document.querySelector('.centered-image');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        const maxTilt = 20;
        const tiltAngle = Math.min(scrollY / 20, maxTilt);

        catImage.style.transform = `rotate(${tiltAngle}deg)`;
    });
});

document.querySelectorAll('.faq-header').forEach(item => {
    item.addEventListener('click', function () {
        this.parentElement.classList.toggle('active');
        const icon = this.querySelector('span');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
});
