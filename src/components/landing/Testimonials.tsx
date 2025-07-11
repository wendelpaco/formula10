import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João S.",
    avatar: "JS",
    text: "O método é muito prático e direto ao ponto. Consegui meus primeiros resultados em menos de um mês!",
  },
  {
    name: "Maria P.",
    avatar: "MP",
    text: "Nunca imaginei que fosse possível começar sem investir nada. Este eBook mudou minha perspectiva.",
  },
  {
    name: "Carlos A.",
    avatar: "CA",
    text: "Excelente conteúdo! As dicas sobre ferramentas gratuitas foram um divisor de águas para mim.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que nossos leitores dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Resultados reais de pessoas que aplicaram o método.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar>
                  <AvatarImage
                    src={`https://placehold.co/40x40/E0F7FA/1E3A8A?text=${testimonial.avatar}`}
                  />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
