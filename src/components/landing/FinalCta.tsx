import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShieldCheck } from "lucide-react";

const offerIncludes = [
  "Ebook Completo (Valor: R$ 197)",
  "Bônus #1: Guia de Copywriting (Valor: R$ 97)",
  "Bônus #2: Pack de Templates (Valor: R$ 67)",
  "Bônus #3: Planilha Financeira (Valor: R$ 47)",
  "Bônus #4: Grupo VIP (Valor Inestimável)",
  "Acesso Vitalício e Atualizações Futuras",
];

export function FinalCta() {
  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="overflow-hidden shadow-2xl border-primary border-2">
          <CardHeader className="bg-primary/10 p-8 text-center">
             <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sim, eu quero acesso imediato a tudo isso!
             </CardTitle>
          </CardHeader>
          <CardContent className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="font-bold text-xl mb-4 text-foreground">Resumo da sua oferta:</h3>
                <ul className="space-y-2">
                    {offerIncludes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-center bg-card p-6 rounded-lg border">
                 <p className="text-muted-foreground">Preço Original: <span className="line-through">R$ 297,00</span></p>
                 <p className="text-lg text-foreground mt-1">Hoje por apenas:</p>
                 <p className="font-headline text-6xl font-extrabold text-primary">R$ 47</p>
                 <p className="text-muted-foreground">(ou 3x de R$ 15,90)</p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-lg font-bold mt-6 h-14 bg-accent hover:bg-accent/90"
                  >
                    <a href="#">QUERO GARANTIR MINHA VAGA</a>
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <span>Compra segura e garantia de 30 dias!</span>
                  </div>
            </div>
          </CardContent>
           <div className="bg-muted p-4">
            <p className="text-center text-sm text-muted-foreground">Formas de Pagamento Aceitas:</p>
            <div className="flex justify-center items-center gap-4 mt-2">
                <Image src="https://i.imgur.com/PHmYwni.png" data-ai-hint="payment methods secure" alt="Formas de Pagamento Aceitas" width={300} height={31} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
