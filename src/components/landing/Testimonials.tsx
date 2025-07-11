import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Uberlândia - MG",
    image: "https://placehold.co/100x100.png",
    text: "Eu não acreditava que fosse possível até tentar. Hoje ganho mais do que no meu antigo emprego fixo. Este ebook mudou minha perspectiva e minha conta bancária!",
  },
  {
    name: "Juliana R.",
    location: "Salvador - BA",
    image: "https://placehold.co/100x100.png",
    text: "Comecei com o celular velho da minha mãe. Hoje comprei meu próprio notebook com os ganhos! O método é simples e direto ao ponto. Indico de olhos fechados.",
  },
  {
    name: "Fernando G.",
    location: "São Paulo - SP",
    image: "https://placehold.co/100x100.png",
    text: "O capítulo sobre ferramentas gratuitas foi um divisor de águas. Consegui montar toda minha estrutura sem investir um centavo. Simplesmente incrível!",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            O que nossos leitores dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resultados reais de pessoas que aplicaram o método. Já vendemos mais de 1.287 cópias!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between bg-card p-6 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="p-0 mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                  data-ai-hint="person photo"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}