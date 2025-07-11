import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";

export function Purchase() {
  return (
    <section id="purchase-section" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <Card className="overflow-hidden shadow-2xl">
          <CardHeader className="bg-muted p-8 text-center">
             <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comece sua jornada agora!
             </CardTitle>
             <CardDescription className="mt-4 text-lg text-muted-foreground">
              Acesso imediato a todo o conteúdo por um preço especial.
             </CardDescription>
          </CardHeader>
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <span className="text-2xl text-muted-foreground line-through">
                de R$ 97,00
              </span>
              <p className="font-headline text-5xl font-extrabold text-primary sm:text-6xl">
                por R$ 19,90
              </p>
              <p className="text-muted-foreground">(Pagamento único)</p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full text-lg font-bold"
            >
              <a href="#">Comprar Agora e Ter Acesso Imediato</a>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-amber-600">
                <Zap className="h-4 w-4" />
                <span>Promoção por tempo limitado!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
