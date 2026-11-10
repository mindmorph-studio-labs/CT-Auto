# CT-Auto

Plateforme moderne de démarches automobiles et annuaire de professionnels agréés.

## 📖 Description
CT-Auto est un guichet unique d'orientation pour les démarches automobiles. Ce projet vise à simplifier les démarches administratives liées aux véhicules en associant un annuaire de professionnels agréés géolocalisés, des guides pratiques optimisés pour le référencement (SEO) et un système intelligent de génération de leads.

## 🚀 Fonctionnalités
- **Guichet unique** : Centralisation des démarches (carte grise, changement de propriétaire, importation, etc.)
- **Annuaire géolocalisé** : Mise en relation avec des professionnels agréés par département et ville.
- **Contenu SEO structuré** : Guides pratiques avec données enrichies (Schema.org JSON-LD).
- **Calculateur dynamique** : Estimation du prix de la carte grise selon le département, la puissance fiscale et l'énergie.
- **Génération de leads** : Formulaires sécurisés avec validation des données en temps réel.

## 🛠️ Stack Technique
- **Framework** : Next.js 15 (App Router) & React
- **Langage** : TypeScript (mode strict)
- **Styling** : Tailwind CSS v4 + shadcn/ui (basé sur Radix UI)
- **Base de données** : Prisma ORM (PostgreSQL / SQLite)
- **Validation** : Zod + React Hook Form
- **Outils** : ESLint, Turbopack, Lucide React (icônes)

## 📂 Architecture du Projet
```text
├── app/                  # Routes Next.js (App Router) et layouts
├── components/           # Composants UI réutilisables (shadcn/ui + custom)
├── lib/                  # Utilitaires, configuration Prisma et helpers
├── prisma/               # Schéma de base de données et migrations
└── public/               # Assets statiques (images, icônes)
```

## 📦 Installation & Démarrage

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/mindmorph-studio-labs/CT-Auto.git
   cd CT-Auto
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer l'environnement**
   Créez un fichier `.env` à la racine du projet. *(Ce fichier est ignoré par Git pour des raisons de sécurité).*
   ```env
   DATABASE_URL="file:./dev.db" # Exemple pour SQLite en développement local
   ```

4. **Initialiser la base de données**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## 🔒 Sécurité et Bonnes Pratiques
Les fichiers sensibles (comme `.env`, `node_modules`, `.next`) sont strictement exclus du contrôle de version via le fichier `.gitignore`. Aucune donnée d'identification, clé API ou information utilisateur n'est présente dans ce dépôt.

---
*Projet développé avec rigueur et modularité. Pour toute question technique, n'hésitez pas à ouvrir une issue.*
```

---