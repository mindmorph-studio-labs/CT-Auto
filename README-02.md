# GuichetAuto.fr - Plateforme de Démarches Automobiles

## 📖 Description
Guichet-CT-Auto est un guichet unique d'orientation pour les démarches automobiles. La plateforme associe un annuaire de professionnels agréés, des guides pratiques optimisés pour le SEO et un système de génération de leads, le tout construit sur une architecture web moderne, modulaire et performante.

## 🛠️ Stack Technique
- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + `class-variance-authority` (CVA)
- **Composants UI** : shadcn/ui (basé sur Radix UI)
- **Icônes** : Lucide React
- **Formulaires & Validation** : React Hook Form + Zod
- **Base de Données & ORM** : PostgreSQL / SQLite + Prisma
- **SEO Technique** : Next.js Metadata API, Schema.org (JSON-LD), Sitemap dynamique, Fil d'Ariane (Breadcrumb)

## 🔒 Sécurité et Contrôle de Version (Git & GitHub)
- **Fichier `.env`** : Contient les variables d'environnement sensibles (ex: `DATABASE_URL`, clés API). Ce fichier est **strictement ignoré** par Git et ne doit **jamais** être poussé sur GitHub.
- **Stratégie de commit** : Un commit sémantique (ex: `feat: add navbar and breadcrumb layout`) sera réalisé et poussé sur GitHub à la fin de chaque étape majeure de la roadmap pour garantir un historique clair, modulaire et réversible.

## 🗺️ Roadmap du Projet & Historique des Commits
Le projet est découpé en phases majeures. 

### Phase 1 : Initialisation & Stack (Actuelle) ✅ [COMMIT #1 : Initial commit]
- [x] Configuration du répertoire racine (`D:\Directories\NICHES\centre-controle-technique`)
- [x] Installation de Next.js, TypeScript, Tailwind CSS
- [x] Intégration de shadcn/ui, Prisma, Zod et React Hook Form
- [x] Création du dépôt GitHub et premier commit
- [x] Rédaction du fichier `README.md` et définition de la roadmap

### Phase 2 : Architecture Core & Navigation 🔄 [COMMIT #2 PRÉVU]
- [ ] Mise en place du Layout global (`app/layout.tsx`) avec Fil d'Ariane (Breadcrumb) dynamique et persistant
- [ ] Création de la Navbar responsive avec menu déroulant "Démarches"
- [ ] Configuration des routes statiques et dynamiques de base
- [ ] Mise en place du système de gestion des métadonnées SEO (Titles, Descriptions, OpenGraph)

### Phase 3 : Patterns de Pages & Templates Structurés 🔄 [COMMIT #3 PRÉVU]
- [ ] **Pattern A** : Page Démarche Standard / SEO (ex: `/changement-proprietaire-carte-grise`)
- [ ] **Pattern B** : HUB Importation (`/vehicule-importe`)
- [ ] **Pattern C** : Fiche Annuaire / Professionnel (`/professionnel/[slug]`)
- [ ] Développement des composants réutilisables

### Phase 4 : Moteur et Monétisation 🔄 [COMMIT #4 PRÉVU]
- [ ] Développement du Calculateur de Carte Grise
- [ ] Mise en place du système de Lead Generation (Capture, Stockage BDD via Prisma, Dashboard Admin)
- [ ] Intégration des balises Schema.org

### Phase 5 : Déploiement & SEO Technique 🔄 [COMMIT #5 PRÉVU]
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
