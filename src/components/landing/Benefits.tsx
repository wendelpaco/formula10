import { Target, BrainCircuit, TrendingUp, HandCoins, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Conquiste sua Liberdade Financeira",
    description: "Aprenda a criar um negócio online que te gera renda passiva e te permite viver dos seus lucros.",
  },
  {
    icon: BrainCircuit,
    title: "Domine o Marketing Digital",
    description: "Descubra as estratégias mais eficazes para atrair clientes e vender todos os dias de forma automática.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Métodos validados para escalar seus resultados e transformar uma renda extra em seu negócio principal.",
  },
  {
    icon: HandCoins,
    title: "Comece Com Zero Investimento",
    description: "Use ferramentas e técnicas gratuitas para construir seu império online sem precisar gastar nada.",
  },
  {
    icon: Rocket,
    title: "Saia na Frente em 2025",
    description: "Tenha acesso aos 5 modelos de negócio mais promissores para o próximo ano e comece com vantagem.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                O que você vai descobrir neste ebook
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Foco em transformações, não em características.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                    <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}