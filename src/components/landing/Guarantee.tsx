import { ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";

export function Guarantee() {
   const handleScrollToPurchase = () => {
    document
      .getElementById("final-cta")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <div className="inline-flex items-center gap-4 rounded-lg border-2 border-dashed border-primary bg-primary/5 p-8 text-center ">
          <ShieldCheck className="h-24 w-24 flex-shrink-0 text-primary md:h-32 md:w-32" />
          <div className="text-left">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Sua Compra é 100% Segura com Nossa Garantia Incondicional de 30 Dias!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem 30 dias completos para explorar o ebook. Se não ficar totalmente satisfeito, basta nos enviar um e-mail e devolveremos cada centavo do seu investimento. O risco é todo nosso.
            </p>
          </div>
        </div>
         <Button
            size="lg"
            className="text-lg font-bold mt-8 h-14 px-10 bg-accent hover:bg-accent/90"
            onClick={handleScrollToPurchase}
          >
            QUERO MEU EBOOK SEM RISCO ALGUM
          </Button>
      </div>
    </section>
  );
}