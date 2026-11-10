"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  FileText, 
  Globe, 
  Calculator, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Copy,
  Handshake,
  User,
  Award,
  Users,
  Zap,
  Lock,
  Star,
  Phone,
  Crown,
  BadgeCheck,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const formalites = [
    {
      icon: FileText,
      title: "Immatriculation d'un véhicule d'occasion",
      desc: "Acheter ou vendre une voiture d'occasion immatriculée en France",
      delay: "24 à 48h",
      delayColor: "bg-emerald-100 text-emerald-700",
      href: "/immatriculation-vehicule-occasion"
    },
    {
      icon: MapPin,
      title: "Changement d'adresse sur la carte grise",
      desc: "Mettez à jour l'adresse de votre certificat d'immatriculation",
      delay: "Gratuit",
      delayColor: "bg-blue-100 text-blue-700",
      href: "/changement-adresse-carte-grise"
    },
    {
      icon: Copy,
      title: "Demande de duplicata (vol, perte, détérioration)",
      desc: "Obtenez un nouvel exemplaire de votre certificat d'immatriculation",
      delay: "24 à 48h",
      delayColor: "bg-emerald-100 text-emerald-700",
      href: "/duplicata-carte-grise"
    },
    {
      icon: Handshake,
      title: "Déclaration de cession d'un véhicule",
      desc: "Informez l'administration de la vente ou du don de votre véhicule",
      delay: "Immédiat",
      delayColor: "bg-purple-100 text-purple-700",
      href: "/declaration-cession-vehicule"
    },
    {
      icon: Globe,
      title: "Immatriculation d'un véhicule importé (UE / hors UE)",
      desc: "Obtenez votre carte grise française pour un véhicule acheté à l'étranger",
      delay: "3 à 5 jours",
      delayColor: "bg-orange-100 text-orange-700",
      href: "/vehicule-importe"
    },
    {
      icon: Award,
      title: "Immatriculation en Carte Grise Collection",
      desc: "Valorisez votre véhicule de collection de plus de 30 ans",
      delay: "3 à 5 jours",
      delayColor: "bg-orange-100 text-orange-700",
      href: "/carte-grise-collection"
    },
    {
      icon: Calculator,
      title: "Calculateur et tarif du certificat d'immatriculation",
      desc: "Comprendre et estimer le coût exact de votre carte grise en 2026",
      delay: "Immédiat",
      delayColor: "bg-purple-100 text-purple-700",
      href: "/prix-carte-grise"
    },
    {
      icon: User,
      title: "Changement d'état civil ou de nom",
      desc: "Mettez à jour votre nom marital, nom d'usage ou suite à un mariage / divorce",
      delay: "24 à 48h",
      delayColor: "bg-emerald-100 text-emerald-700",
      href: "/changement-etat-civil"
    },
  ];

  const avantages = [
    {
      icon: ShieldCheck,
      title: "100% Légal et Agréé",
      desc: "Habilité par le Ministère de l'Intérieur et connecté à l'ANTS pour des démarches officielles."
    },
    {
      icon: Zap,
      title: "Traitement Rapide",
      desc: "Vos dossiers sont traités en priorité, avec un suivi en temps réel et une livraison sous 24 à 48h."
    },
    {
      icon: Users,
      title: "Réseau de Professionnels",
      desc: "Plus de 500 professionnels agréés dans toute la France pour vous accompagner localement."
    },
    {
      icon: Lock,
      title: "Données Sécurisées",
      desc: "Vos informations personnelles sont cryptées et protégées selon les normes RGPD les plus strictes."
    },
  ];

  const professionnels = [
    {
      name: "Auto Immat 31 - Centre Agréé SIV",
      premium: true,
      badge: "Centre habilité SIV & Préfecture",
      rating: 4.9,
      reviews: 184,
      address: "45 Avenue de Grande-Bretagne, Toulouse (31)",
      desc: "Expert en immatriculation rapide à Toulouse. Carte grise sur place en 15 minutes, véhicules importés, plaques d’immatriculation et service de cartes grises collection.",
      services: ["Carte grise", "Duplicata", "Changement adresse"],
      extraServices: 2,
      phone: "05 34 00 00 01",
      href: "/professionnel/auto-immat-31"
    },
    {
      name: "Gironde Carte Grise & Formalités",
      premium: true,
      badge: "Mandataire Automobile & SIV",
      rating: 4.8,
      reviews: 142,
      address: "12 Cours de Verdun, Bordeaux (33)",
      desc: "Guichet agréé par le Ministère de l’Intérieur à Bordeaux. Traitement express de vos dossiers complexes, imports allemands et immatriculations provisoires WW.",
      services: ["Carte grise", "Duplicata", "Changement adresse"],
      extraServices: 1,
      phone: "05 56 00 00 02",
      href: "/professionnel/gironde-carte-grise"
    },
    {
      name: "Lyon Auto Service & SIV",
      premium: false,
      badge: "Garage Agréé SIV",
      rating: 4.7,
      reviews: 96,
      address: "88 Rue Garibaldi, Lyon (69)",
      desc: "Au cœur de Lyon, notre centre vous accueille sans rendez-vous pour toutes vos formalités de carte grise et pose de plaques d'immatriculation certifiées.",
      services: ["Carte grise", "Duplicata", "Changement adresse"],
      extraServices: 1,
      phone: "04 78 00 00 03",
      href: "/professionnel/lyon-auto-service"
    },
  ];

  const villes = [
    { name: "Paris", count: 45, href: "/ville/paris" },
    { name: "Lyon", count: 22, href: "/ville/lyon" },
    { name: "Marseille", count: 19, href: "/ville/marseille" },
    { name: "Toulouse", count: 18, href: "/ville/toulouse" },
    { name: "Bordeaux", count: 14, href: "/ville/bordeaux" },
    { name: "Nice", count: 12, href: "/ville/nice" },
    { name: "Nantes", count: 11, href: "/ville/nantes" },
    { name: "Strasbourg", count: 10, href: "/ville/strasbourg" },
  ];

  const articles = [
    {
      title: "Comment faire une carte grise en ligne en 2026 ?",
      tag: "Carte grise",
      date: "14 Octobre 2026",
      readTime: "4 min de lecture",
      excerpt: "Guide complet étape par étape pour réaliser votre certificat d'immatriculation sans vous déplacer en préfecture.",
      href: "/blog/carte-grise-en-ligne-2026",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Quels documents fournir pour une carte grise ?",
      tag: "Immatriculation",
      date: "10 Octobre 2026",
      readTime: "5 min de lecture",
      excerpt: "Liste exhaustive des justificatifs exigés par l'administration pour toutes vos formalités automobiles.",
      href: "/blog/documents-carte-grise",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
      title: "Importer une voiture d'Allemagne : le guide complet 2026",
      tag: "Véhicules importés",
      date: "28 Septembre 2026",
      readTime: "7 min de lecture",
      excerpt: "Toutes les étapes douanières, fiscales (quitus fiscal) et d'immatriculation pour réussir l'importation de votre véhicule.",
      href: "/blog/import-voiture-allemagne-2026",
      image: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800&h=400"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-50 border-b border-border pb-20 pt-16 md:pt-24">
        <div className="absolute inset-0 bg-admin-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
                <ShieldCheck className="h-4 w-4" />
                Habilité par le Ministère de l'Intérieur
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Vos démarches automobiles,<br />
                <span className="text-emerald-600">simplifiées et validées.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Le guichet unique pour gérer votre carte grise, importer votre véhicule ou trouver un professionnel agréé.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto bg-white p-2 rounded-xl shadow-lg border border-slate-200">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input placeholder="Ex: Changer de propriétaire, import Allemagne..." className="pl-10 h-12 border-0 focus-visible:ring-0 text-base bg-transparent" />
                </div>
                <Button className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg">
                  Rechercher
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {["Carte grise", "Import", "Duplicata", "Collection"].map((tag) => (
                  <Link key={tag} href={`/recherche?q=${tag}`} className="text-sm text-slate-500 hover:text-emerald-600 underline decoration-slate-300 hover:decoration-emerald-600 underline-offset-4 transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION FORMALITÉS ADMINISTRATIVES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Formalités administratives</h2>
            <p className="text-xl text-emerald-600 font-semibold mb-4">Toutes vos démarches carte grise</p>
            <p className="text-slate-600 text-lg">Sélectionnez votre situation pour consulter la liste des pièces justificatives, les étapes et trouver un professionnel agréé proche de chez vous.</p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <Link href="/calculateur">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                      <Calculator className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Estimer le prix de votre carte grise</h3>
                      <p className="text-slate-600 text-sm">Calcul gratuit et instantané selon votre département et véhicule</p>
                    </div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-emerald-600 group-hover:translate-x-2 transition-transform hidden sm:block" />
                </div>
              </motion.div>
            </Link>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formalites.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={service.href}>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-xl transition-all group cursor-pointer h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <service.icon className="h-6 w-6 text-slate-700 group-hover:text-emerald-600 transition-colors" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${service.delayColor}`}>{service.delay}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-emerald-600 mt-auto">
                      Consulter la démarche
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION POURQUOI NOUS CHOISIR */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pourquoi choisir GuichetAuto ?</h2>
            <p className="text-slate-600 text-lg">Une plateforme de confiance pour toutes vos démarches automobiles</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all h-full">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <avantage.icon className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{avantage.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{avantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION RÉSEAU SIV NATIONAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Réseau SIV National</h2>
            <p className="text-xl text-emerald-600 font-semibold mb-4">Professionnels agréés à la une</p>
            <p className="text-slate-600 text-lg">Prenez rendez-vous ou demandez un devis auprès de nos centres habilités par le Ministère de l'Intérieur.</p>
          </div>
          <div className="max-w-6xl mx-auto flex justify-end mb-8">
            <Link href="/professionnels">
              <Button variant="outline" className="border-slate-300 hover:border-emerald-500 hover:text-emerald-600">
                Voir tous les professionnels (7+)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionnels.map((pro, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pro.premium && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                        <Crown className="h-3 w-3" />
                        Premium Recommandé
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <BadgeCheck className="h-3 w-3" />
                      Agréé SIV
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{pro.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{pro.badge}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-900">{pro.rating}</span>
                    </div>
                    <span className="text-sm text-slate-500">({pro.reviews} avis)</span>
                  </div>
                  <div className="flex items-start gap-2 mb-3 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" />
                    <span>{pro.address}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{pro.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pro.services.map((service, j) => (
                      <span key={j} className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">{service}</span>
                    ))}
                    {pro.extraServices > 0 && (
                      <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium">+{pro.extraServices}</span>
                    )}
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-slate-100">
                    <Link href={pro.href} className="flex-1">
                      <Button variant="outline" className="w-full border-slate-300 hover:border-emerald-500 hover:text-emerald-600 text-sm">Voir la fiche</Button>
                    </Link>
                    <Button variant="outline" className="flex-1 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 text-sm">
                      <Phone className="h-4 w-4 mr-1.5" />
                      Appeler
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION RECHERCHE LOCALE */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recherche locale</h2>
            <p className="text-xl text-emerald-600 font-semibold mb-4">Trouvez un pro dans votre ville</p>
            <p className="text-slate-600 text-lg">Accédez aux centres d'immatriculation et garages agréés dans les principales métropoles françaises.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {villes.map((ville, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={ville.href}>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-lg transition-all group cursor-pointer flex flex-col items-center justify-center text-center h-full">
                    <MapPin className="h-6 w-6 text-slate-400 group-hover:text-emerald-600 mb-2 transition-colors" />
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{ville.name}</h3>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-2">{ville.count} pros</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION ACTUALITÉS & CONSEILS (NOUVELLE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Actualités & Conseils</h2>
              <p className="text-xl text-emerald-600 font-semibold mb-2">Guides pratiques automobile</p>
              <p className="text-slate-600 text-lg">
                Tout savoir sur la législation, la fiscalité automobile, le contrôle technique et l'achat de véhicules.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="border-slate-300 hover:border-emerald-500 hover:text-emerald-600 whitespace-nowrap">
                Tous les articles du blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={article.href} className="group block h-full">
                  <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-xl transition-all h-full flex flex-col">
                    {/* Encart Photo */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-emerald-700 text-xs font-bold shadow-sm border border-emerald-100">
                        {article.tag}
                      </span>
                    </div>

                    {/* Contenu de l'article */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-sm font-semibold text-emerald-600 mt-auto pt-4 border-t border-slate-100">
                        Lire l'article complet
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION BANNIÈRE RAPPEL GRATUIT */}
      <section className="w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-y border-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Phone className="h-3.5 w-3.5" />
                Service de rappel gratuit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Besoin d'aide pour votre démarche carte grise ?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Laissez vos coordonnées et recevez un appel d'un professionnel agréé SIV proche de chez vous en moins de 2 heures.
              </p>
            </div>
            
            <Button size="lg" className="h-14 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-base">
              Être rappelé par un professionnel
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION CONFIANCE */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { title: "100% Légal", desc: "Nous sommes habilités par le Ministère de l'Intérieur et l'ANTS." },
              { title: "Traitement Rapide", desc: "Vos dossiers sont traités en priorité, sous 24 à 48 heures." },
              { title: "Accompagnement", desc: "Une équipe d'experts est disponible pour répondre à vos questions." }
            ].map((item, i) => (
              <div key={i} className="flex md:items-start items-center gap-4">
                <CheckCircle2 className="h-8 w-8 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
