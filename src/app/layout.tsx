import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Breadcrumb } from "@/components/layout/breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GuichetAuto.fr - Le guichet unique des démarches automobiles",
    template: "%s | GuichetAuto.fr",
  },
  description: "Guichet unique d'orientation pour les démarches automobiles : carte grise, changement de propriétaire, importation, et annuaire de professionnels agréés.",
  keywords: ["carte grise", "démarche automobile", "changement propriétaire", "import véhicule", "contrôle technique"],
  authors: [{ name: "GuichetAuto.fr" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.guichetauto.fr",
    siteName: "GuichetAuto.fr",
    title: "GuichetAuto.fr - Démarches automobiles simplifiées",
    description: "Trouvez un professionnel agréé et réalisez vos démarches automobiles en toute simplicité.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased flex flex-col`}>
        {/* 1. Navbar persistante en haut */}
        <Navbar />
        
        {/* 2. Fil d'Ariane dynamique juste en dessous */}
        <Breadcrumb />
        
        {/* 3. Contenu principal de la page */}
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer réservé pour une future implémentation */}
      </body>
    </html>
  );
}
