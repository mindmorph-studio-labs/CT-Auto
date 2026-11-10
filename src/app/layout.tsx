import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Breadcrumb } from "@/components/layout/breadcrumb";

// Chargement optimisé des polices Google
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GuichetAuto - Le guichet unique des démarches automobiles",
    template: "%s | GuichetAuto",
  },
  description: "Guichet unique d'orientation pour les démarches automobiles : carte grise, changement de propriétaire, importation, et annuaire de professionnels agréés.",
  keywords: ["carte grise", "démarche automobile", "changement propriétaire", "import véhicule", "contrôle technique"],
  authors: [{ name: "GuichetAuto" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.guichetauto.fr",
    siteName: "GuichetAuto",
    title: "GuichetAuto - Démarches automobiles simplifiées",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <Breadcrumb />
        
        <main className="flex-1">
          {children}
        </main>

        {/* Footer à venir */}
      </body>
    </html>
  );
}
