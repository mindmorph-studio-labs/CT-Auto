import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function LeadCTACard() {
  return (
    <Card className="bg-primary/5 border-primary/20 mt-10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Phone className="h-5 w-5" />
          Besoin d'aide pour votre démarche ?
        </CardTitle>
        <CardDescription>
          Nos professionnels agréés peuvent réaliser cette démarche pour vous en moins de 24h.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/contact">
            Demander un devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link href="/professionnels">
            Trouver un professionnel agréé
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
