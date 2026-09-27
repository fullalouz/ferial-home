document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const productsSlider = document.getElementById('productsSlider');
    const slideLeftBtn = document.getElementById('slideLeft');
    const slideRightBtn = document.getElementById('slideRight');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    if (productsSlider && slideLeftBtn && slideRightBtn) {
        slideLeftBtn.addEventListener('click', () => {
            productsSlider.scrollBy({ left: -260, behavior: 'smooth' });
        });

        slideRightBtn.addEventListener('click', () => {
            productsSlider.scrollBy({ left: 260, behavior: 'smooth' });
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        });
    }
});