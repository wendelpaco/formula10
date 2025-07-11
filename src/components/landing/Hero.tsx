"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function Hero() {
  const handleScrollToPurchase = () => {
    document
      .getElementById("final-cta")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-card pt-32 pb-16 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Descubra o Método Secreto que Fez Milhares de Pessoas Conquistarem a Liberdade Financeira em Apenas 30 Dias - Mesmo Começando do Zero!
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          O passo a passo completo para você construir uma fonte de renda sólida na internet e transformar sua vida.
        </p>
         <div className="mt-4 flex items-center justify-center gap-2 text-foreground">
            <Users className="h-5 w-5 text-accent" />
            <span className="font-semibold">Mais de 1.287 pessoas já transformaram suas vidas!</span>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="text-lg font-bold h-14 px-10 bg-accent hover:bg-accent/90"
            onClick={handleScrollToPurchase}
          >
            QUERO MEU EBOOK AGORA 🔥
          </Button>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-xs md:max-w-sm">
          <Image
            src="https://placehold.co/400x500.png"
            alt="eBook Mockup"
            width={400}
            height={500}
            className="rounded-lg shadow-2xl"
            data-ai-hint="ebook cover 3d"
            priority
          />
        </div>
      </div>
    </section>
  );
}