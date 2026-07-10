/* ========================================
   PORTFOLIO.JS - Filtrage des projets
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const portfolioItems = document.querySelectorAll('[data-category]');

    // Ajouter des event listeners aux boutons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Mettre à jour la classe active du bouton
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            // Filtrer les projets
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    // Animation
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, 10);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });

    // Afficher tous les projets par défaut
    portfolioItems.forEach(item => {
        item.style.display = 'block';
    });
});
