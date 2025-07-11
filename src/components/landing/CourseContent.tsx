import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const content = [
  {
    title: "Escolha do Modelo Certo",
    description: "Aprenda a identificar os nichos mais lucrativos e que se encaixam no seu perfil.",
  },
  {
    title: "Atração de Clientes",
    description: "Descubra estratégias orgânicas para atrair seus primeiros clientes sem gastar com anúncios.",
  },
  {
    title: "Ferramentas Grátis",
    description: "Um arsenal de ferramentas gratuitas para criar, gerenciar e automatizar seu negócio online.",
  },
  {
    title: "Estratégias para Escalar",
    description: "Leve seu negócio para o próximo nível com técnicas de crescimento sustentável.",
  },
];

export function CourseContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O que você vai aprender
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um guia completo, do zero ao avançado, para sua jornada online.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {content.map((item, index) => (
            <Card key={index} className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                 <CheckCircle2 className="h-8 w-8 text-primary" />
                 <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
