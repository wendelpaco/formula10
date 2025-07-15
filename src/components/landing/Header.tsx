"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function Header() {
  const handleScrollToPurchase = () => {
    document
      .getElementById("final-cta")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between bg-background/80 px-4 shadow-md backdrop-blur-sm md:px-8">
      <div className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Método Renda Online</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleScrollToPurchase} variant="default" className="bg-accent hover:bg-accent/90">
          QUERO MEU EBOOK AGORA
        </Button>
        <Button asChild variant="outline">
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
