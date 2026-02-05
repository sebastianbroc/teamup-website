document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            // Toggle menu visibility
            navLinks.classList.toggle('active');
            
            // Animate burger icon
            burgerMenu.classList.toggle('toggle');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('toggle');
            });
        });
    }
});
