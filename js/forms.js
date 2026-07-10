/* ========================================
   FORMS.JS - Gestion des formulaires
   ======================================== */

class FormHandler {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Validation
        if (!this.validateForm(form)) {
            console.error('Formulaire invalide');
            return;
        }

        // Simule l'envoi du formulaire
        console.log('Formulaire soumis:', Object.fromEntries(formData));
        
        // Affiche un message de succès
        this.showSuccess(form);
        
        // Réinitialise le formulaire
        setTimeout(() => form.reset(), 1000);
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        for (let input of inputs) {
            if (!input.value.trim()) {
                this.showError(input, 'Ce champ est requis');
                return false;
            }

            if (input.type === 'email' && !this.validateEmail(input.value)) {
                this.showError(input, 'Email invalide');
                return false;
            }
        }

        return true;
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showError(input, message) {
        input.classList.add('input-error');
        
        let errorElement = input.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            input.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    showSuccess(form) {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success fade-in';
        successMessage.textContent = '✓ Votre message a été envoyé avec succès !';
        
        form.insertBefore(successMessage, form.firstChild);
        
        setTimeout(() => successMessage.remove(), 3000);
    }
}

// Initialiser au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});
