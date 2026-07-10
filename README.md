# 🌐 Portfolio Web - Documentation

## 📋 Vue d'ensemble

Ceci est une solution complète et professionnelle pour un portfolio personnel de développeur web.
Le site est construit avec une architecture modulaire, des variables CSS globales, et un système de design cohérent.

## 📁 Structure des Fichiers

```
mon-super-site/
├── 📄 Pages HTML
│   ├── index.html              # Accueil - Hero section
│   ├── about.html              # À propos - Présentation
│   ├── services.html           # Services et tarifs
│   ├── portfolio.html          # Galerie de projets
│   ├── contact.html            # Formulaire de contact
│   ├── Apropos.html            # Alias pour about
│   ├── Contact.html            # Alias pour contact (majuscule)
│   └── README.html             # Documentation
│
├── 📁 css/
│   ├── main.css                # Point d'entrée (imports tous les autres)
│   ├── variables.css           # Variables, design system (couleurs, espacements, typo)
│   ├── reset.css               # Normalisation CSS
│   ├── layout.css              # Grille, flex, espacements
│   ├── header.css              # Navigation et en-tête
│   ├── footer.css              # Pied de page
│   ├── components.css          # Boutons, cartes, formulaires, etc.
│   └── pages.css               # Styles spécifiques aux sections
│
├── 📁 js/
│   ├── navigation.js           # Menu mobile responsive
│   ├── forms.js                # Validation de formulaires
│   └── utils.js                # Fonctions utilitaires
│
└── 📁 assets/
    └── images/                 # Dossier pour les images
```

## 🎨 Système de Design

### Couleurs
- **Primaire:** #2c3e50 (Bleu foncé)
- **Accent:** #3498db (Bleu clair)
- **Success:** #27ae60 (Vert)
- **Danger:** #e74c3c (Rouge)
- **Warning:** #f39c12 (Jaune)

### Typographie
- **Police:** Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Icônes:** Font Awesome 6.4
- **Tailles:** xs (0.75rem) → 3xl (2.5rem)

### Espacements
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem

## ✨ Caractéristiques Principales

✅ **Responsive Design** - Mobile-first approach
✅ **Navigation Mobile** - Menu hamburger automatique
✅ **Formulaires** - Validation client-side
✅ **Performance** - CSS modulaire, optimisé
✅ **Accessibilité** - WCAG guidelines
✅ **SEO** - Meta tags, structure sémantique
✅ **Smooth Animations** - Transitions fluides
✅ **Design System** - Variables réutilisables

## 📱 Breakpoints Responsive

```css
Desktop:     ≥ 1200px
Tablet:      768px - 1199px
Mobile:      480px - 767px
Small:       < 480px
```

## 🚀 Démarrage Rapide

1. **Ouvrir le site:**
   - Double-cliquez sur `index.html`

2. **Naviguer:**
   - Accueil → À propos → Services → Portfolio → Contact

3. **Tester le formulaire:**
   - Allez sur la page Contact
   - Remplissez et envoyez le formulaire
   - Recevrez une confirmation

4. **Vérifier la responsivité:**
   - F12 → Ctrl+Shift+M (mode device)
   - Testez sur mobile, tablet, desktop

## 🎯 Pages et Sections

### index.html
- Hero section avec CTA
- Compétences (3 colonnes)
- Statistiques
- Appel à l'action

### about.html
- Photo de profil
- Biographie
- Parcours/Timeline
- Témoignages de clients
- Domaines d'expertise

### services.html
- 6 services principaux
- Cartes interactives
- Tableau de tarifs (3 niveaux)
- Comparaison des offres

### portfolio.html
- Galerie de 6 projets
- Filtrage par catégorie
- Overlays interactifs
- Technologies utilisées

### contact.html
- Informations de contact
- Formulaire complet
- Section FAQ déroulante
- Liens réseaux sociaux

## 🛠️ Customisation

### Changer les couleurs
```css
/* Dans css/variables.css */
:root {
    --primary-color: #2c3e50;  ← Changez ici
    --accent-color: #3498db;    ← Et ici
}
```

### Ajouter des pages
1. Créez `nouvelle-page.html`
2. Copiez la structure d'une page existante
3. Modifiez le contenu
4. Ajoutez le lien dans la navigation

### Modifier le contenu
- Remplacez le texte dans les fichiers HTML
- Changez les images dans `assets/images/`
- Mettez à jour les informations de contact

## 📊 Classes Utilitaires CSS

```html
<!-- Texte -->
<p class="text-center">Centre</p>
<p class="text-primary">Couleur accent</p>

<!-- Espacement -->
<div class="mb-lg">Marge basse grande</div>
<div class="p-md">Padding moyen</div>

<!-- Grille -->
<div class="grid grid-cols-3">3 colonnes</div>

<!-- Flexbox -->
<div class="flex flex-between">Espace entre</div>

<!-- Couleurs -->
<div class="bg-primary">Fond primaire</div>
<div class="bg-light">Fond léger</div>
```

## 🔗 Liens Utiles

- Font Awesome: https://fontawesome.com
- Google Fonts: https://fonts.google.com
- Unsplash (images): https://unsplash.com

## 📞 Support

Pour toute question ou modification :
- Email: djerethouroukna@gmail.com
- Téléphone: +235 63205512

## 📄 Licence

© 2025 DJERET HOUROUKNA INNOCENT. Tous droits réservés.
