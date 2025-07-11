import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-primary bg-primary/5 p-8 text-center md:flex-row md:p-12 md:text-left">
          <ShieldCheck className="h-24 w-24 flex-shrink-0 text-primary md:h-32 md:w-32" />
          <div>
            <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
              Garantia de 7 dias ou seu dinheiro de volta
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem 7 dias para testar o método. Se não ficar satisfeito,
              devolvemos 100% do seu investimento. Risco zero para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
