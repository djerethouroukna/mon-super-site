/* ========================================
   UTILS.JS - Fonctions utilitaires
   ======================================== */

// Utilitaires généraux

// Scroll vers un élément
function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Anime les éléments lors du scroll
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .feature-item, .portfolio-item').forEach(element => {
        observer.observe(element);
    });
}

// Dark mode toggle (optionnel)
function setupDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }

        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }
}

// Copier dans le presse-papiers
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copié !');
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
    });
}

// Obtenir les paramètres d'URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    
    for (let [key, value] of params) {
        result[key] = value;
    }
    
    return result;
}

// Initialiser les utilitaires
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
    setupDarkMode();
});
