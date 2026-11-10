"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Ne pas afficher le fil d'ariane sur la page d'accueil
  if (pathname === "/") return null;

  // Découper l'URL en segments (ex: "/démarche/occasion" -> ["démarche", "occasion"])
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Fonction pour formater les segments (ex: "changement-proprietaire" -> "Changement propriétaire")
  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav aria-label="Fil d'Ariane" className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {/* Lien vers l'accueil */}
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-foreground transition-colors">
              <Home className="h-4 w-4 mr-1" />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>

          {/* Segments dynamiques */}
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const label = formatSegment(segment);

            return (
              <li key={href} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-foreground hover:underline transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
