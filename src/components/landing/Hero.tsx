"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleScrollToPurchase = () => {
    document
      .getElementById("purchase-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-card pt-32 pb-16 text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Descubra o Método Passo a Passo Para Ganhar Dinheiro na Internet Mesmo
          Sem Experiência!
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Milhares já estão aplicando este método e tendo resultados reais —
          aproveite enquanto está disponível!
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="text-lg font-bold"
            onClick={handleScrollToPurchase}
          >
            Quero Começar Agora
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
            data-ai-hint="ebook cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
