import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileText, Clock, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQSchema } from "@/components/seo/faq-schema";
import { LeadCTACard } from "@/components/forms/lead-cta-card";

export const metadata: Metadata = {
  title: "Changement de propriétaire carte grise : Guide et Démarches 2024",
  description: "Tout savoir sur le changement de titulaire de la carte grise. Documents requis, délais, prix et démarches en ligne ou via un professionnel agréé.",
};

const faqData = [
  {
    question: "Quel est le délai pour faire un changement de propriétaire de carte grise ?",
    answer: "Vous disposez d'un délai d'un mois à compter de la date de cession du véhicule pour effectuer la demande de changement de titulaire sur l'ANTS ou via un professionnel agréé."
  },
  {
    question: "Quels sont les documents obligatoires pour cette démarche ?",
    answer: "Vous devez fournir le certificat de cession (Cerfa n°15776*02), l'ancienne carte grise barrée et signée, un justificatif de domicile de moins de 6 mois, et le code de cession transmis par l'ancien propriétaire."
  },
  {
    question: "Combien coûte un changement de propriétaire sur la carte grise ?",
    answer: "Le coût dépend de la puissance fiscale du véhicule, de votre département de résidence et de l'âge du véhicule. Utilisez notre calculateur pour obtenir une estimation précise."
  },
  {
    question: "Puis-je faire cette démarche sans passer par l'ANTS ?",
    answer: "Oui, vous pouvez confier cette démarche à un professionnel de l'automobile agréé et habilité par le Ministère de l'Intérieur, qui s'occupera de toutes les formalités pour vous."
  }
];

export default function ChangementProprietairePage() {
  return (
    <article className="max-w-4xl mx-auto space-y-10">
      {/* 1. Titre H1 et Introduction SEO */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Changement de propriétaire de la carte grise : Guide complet
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          L'achat ou la vente d'un véhicule d'occasion entraîne obligatoirement un <strong>changement de titulaire sur la carte grise</strong> (certificat d'immatriculation). Cette démarche administrative, réglementée par le Ministère de l'Intérieur, doit être effectuée dans un délai d'un mois suivant la date de cession. Que vous choisissiez de réaliser cette procédure en ligne sur le site de l'ANTS ou de faire appel à un professionnel agréé, ce guide vous détaille les étapes, les documents requis et les coûts associés pour éviter tout blocage ou amende.
        </p>
      </header>

      <LeadCTACard />

      {/* 2. Documents Requis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Documents requis pour la démarche
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "Le certificat de cession (Cerfa n°15776*02) rempli et signé.",
            "L'ancienne carte grise barrée, avec la mention « Vendu le [Date] à [Heure] » et signée.",
            "Le code de cession fourni par le vendeur (obligatoire pour l'ANTS).",
            "Un justificatif de domicile de moins de 6 mois (facture électricité, loyer, etc.).",
            "Le formulaire de demande de certificat d'immatriculation (Cerfa n°13750*05).",
            "Une copie du permis de conduire valide du nouveau titulaire."
          ].map((doc, i) => (
            <li key={i} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <span className="text-sm md:text-base">{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Étapes pas-à-pas */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          Les étapes de la démarche
        </h2>
        <div className="space-y-6 border-l-2 border-primary/20 pl-6 ml-2">
          {[
            { title: "Étape 1 : Obtenir le code de cession", desc: "L'ancien propriétaire doit déclarer la vente sur l'ANTS pour vous transmettre le code de cession." },
            { title: "Étape 2 : Rassembler les documents", desc: "Vérifiez que tous les documents listés ci-dessus sont en votre possession et correctement signés." },
            { title: "Étape 3 : Effectuer la demande", desc: "Connectez-vous à votre compte ANTS ou confiez votre dossier à un professionnel agréé pour une prise en charge rapide." },
            { title: "Étape 4 : Réception du CPI", desc: "Vous recevrez un Certificat Provisoire d'Immatriculation (CPI) valable 1 mois, en attendant la carte grise définitive par courrier." }
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Calculateur Inline (Widget) */}
      <section className="my-10">
        <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Estimez le coût de votre carte grise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Le prix d'un changement de propriétaire dépend de la puissance fiscale (CV), de votre département et de l'âge du véhicule.
            </p>
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="/calculateur">
                Accéder au calculateur de carte grise <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* 5. FAQ Enrichie (Schema.org) */}
      <FAQSchema items={faqData} pageTitle="le changement de propriétaire de carte grise" />

      {/* 6. Maillage Interne Automatique */}
      <section className="mt-12 pt-8 border-t">
        <h3 className="text-lg font-semibold mb-4">Démarches complémentaires</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/declaration-cession-vehicule" className="text-sm text-primary hover:underline">
            → Déclarer la cession d'un véhicule
          </Link>
          <Link href="/prix-carte-grise" className="text-sm text-primary hover:underline">
            → Comprendre le prix de la carte grise
          </Link>
          <Link href="/villes" className="text-sm text-primary hover:underline">
            → Trouver un professionnel par ville
          </Link>
        </div>
      </section>
    </article>
  );
}
