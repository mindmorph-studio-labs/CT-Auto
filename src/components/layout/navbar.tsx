"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Car, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const demarchesLinks = [
  { label: "Véhicule d'occasion", href: "/immatriculation-vehicule-occasion" },
  { label: "Changement de propriétaire", href: "/changement-proprietaire-carte-grise" },
  { label: "Déclaration de cession", href: "/declaration-cession-vehicule" },
  { label: "Changement d'adresse", href: "/changement-adresse-carte-grise" },
  { label: "Duplicata de carte grise", href: "/duplicata-carte-grise" },
  { label: "Véhicule importé", href: "/vehicule-importe" },
  { label: "Carte grise collection", href: "/carte-grise-collection" },
];

const mainLinks = [
  { label: "Professionnels", href: "/professionnels" },
  { label: "Villes", href: "/villes" },
  { label: "Blog", href: "/blog" },
  { label: "Calculateur", href: "/calculateur" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Classes réutilisables imitant le style "ghost" de shadcn/ui sans créer de conflit de balises
  const triggerButtonClass = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2";
  const iconButtonClass = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl text-primary">
          <Car className="h-6 w-6" />
          <span>GuichetAuto</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Dropdown Démarches */}
          <DropdownMenu>
            <DropdownMenuTrigger className={triggerButtonClass}>
              <span>Démarches</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {demarchesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="w-full cursor-pointer">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
            </DropdownMenu>

          {/* Liens principaux */}
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button (Celui-ci est seul, aucun risque de conflit) */}
          <Button asChild>
            <Link href="/calculateur">Calculer mon prix</Link>
          </Button>
        </nav>

        {/* Mobile Navigation (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={iconButtonClass}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2 text-left">
                  <Car className="h-5 w-5 text-primary" />
                  <span>GuichetAuto</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Démarches
                  </p>
                  {demarchesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Navigation
                  </p>
                  {mainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/calculateur" onClick={() => setIsOpen(false)}>
                      Calculer mon prix
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
