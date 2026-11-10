# GuichetAuto.fr - Plateforme de Démarches Automobiles

## 📖 Description
GuichetAuto.fr est un guichet unique d'orientation pour les démarches automobiles. La plateforme associe un annuaire de professionnels agréés, des guides pratiques optimisés pour le SEO et un système de génération de leads, le tout construit sur une architecture web moderne, modulaire et performante.

## 🛠️ Stack Technique
- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + `class-variance-authority` (CVA)
- **Composants UI** : shadcn/ui (basé sur Radix UI)
- **Icônes** : Lucide React
- **Formulaires & Validation** : React Hook Form + Zod
- **Base de Données & ORM** : PostgreSQL / SQLite + Prisma
- **SEO Technique** : Next.js Metadata API, Schema.org (JSON-LD), Sitemap dynamique, Fil d'Ariane (Breadcrumb)

## 🗺️ Roadmap du Projet

### Phase 1 : Initialisation & Stack (Actuelle)
- [x] Configuration du répertoire racine (`D:\Directories\NICHES\centre-controle-technique`)
- [x] Installation de Next.js, TypeScript, Tailwind CSS
- [x] Intégration de shadcn/ui, Prisma, Zod et React Hook Form
- [x] Rédaction du présent fichier `README.md` et définition de la roadmap

### Phase 2 : Architecture Core & Navigation
- [ ] Mise en place du Layout global (`app/layout.tsx`) avec Fil d'Ariane (Breadcrumb) dynamique et persistant
- [ ] Création de la Navbar responsive avec menu déroulant "Démarches" (Occasion, Changement de propriétaire, Cession, Adresse, Duplicata, Import, Collection)
- [ ] Configuration des routes statiques et dynamiques de base
- [ ] Mise en place du système de gestion des métadonnées SEO (Titles, Descriptions, OpenGraph)

### Phase 3 : Patterns de Pages & Templates Structurés
- [ ] **Pattern A** : Page Démarche Standard / SEO (ex: `/changement-proprietaire-carte-grise`) avec intro 800 mots, étapes, FAQ Schema.org, CTA Lead.
- [ ] **Pattern B** : HUB Importation (`/vehicule-importe`) avec matrice UE/Hors UE, guides par pays, documents indispensables et formulaire lead premium.
- [ ] **Pattern C** : Fiche Annuaire / Professionnel (`/professionnel/[slug]`) avec infos, badges services, carte GPS et maillage local.
- [ ] Développement des composants réutilisables (FAQ Schema, Cartes de guides, Badges de services).

### Phase 4 : Moteur et Monétisation
- [ ] Développement du Calculateur de Carte Grise (Département, Puissance Fiscale, Énergie, Âge du véhicule)
- [ ] Mise en place du système de Lead Generation (Capture, Stockage BDD via Prisma, Dashboard Admin)
- [ ] Intégration des balises Schema.org (LocalBusiness, FAQPage, BreadcrumbList) sur les pages concernées
- [ ] Optimisation des performances (Core Web Vitals, Next.js Image Optimization)

### Phase 5 : Déploiement & SEO Technique
- [ ] Génération dynamique du `sitemap.xml` et `robots.txt`
- [ ] Tests d'accessibilité et validation mobile (Lighthouse)
- [ ] Déploiement sur plateforme Vercel ou serveur Node.js dédié

## 📂 Structure du Projet (Prévisionnelle)
```text
├── app/
│   ├── (marketing)/          # Groupes de routes : Homepage, Démarches, HUBs
│   ├── (directory)/          # Groupes de routes : Annuaire et fiches professionnels
│   ├── api/                  # Routes API (Soumission de leads, Calculateur)
│   ├── layout.tsx            # Layout racine avec Navbar et Fil d'Ariane
│   └── globals.css           # Styles globaux Tailwind
├── components/
│   ├── ui/                   # Composants shadcn/ui générés
│   ├── layout/               # Navbar, Breadcrumb, Footer
│   ├── forms/                # Formulaires (Lead Gen, Calculateur)
│   └── seo/                  # Composants JSON-LD (FAQ, LocalBusiness, Breadcrumb)
├── lib/
│   ├── prisma.ts             # Instance unique du client Prisma
│   ├── utils.ts              # Utilitaires (fonction `cn`, formatage)
│   └── seo.ts                # Générateurs de métadonnées standardisées
├── prisma/
│   └── schema.prisma         # Schéma de base de données (Leads, Pros, Villes)
└── README.md