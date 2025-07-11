import {
  Globe,
  Star,
  Zap,
  EyeOff,
  CircleDollarSign,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Trabalhe de onde quiser",
    description: "Com apenas um celular ou notebook.",
  },
  {
    icon: Star,
    title: "Ideal para quem está começando",
    description: "E não sabe por onde iniciar.",
  },
  {
    icon: Zap,
    title: "Método rápido e simples",
    description: "Sem enrolação, direto ao ponto.",
  },
  {
    icon: EyeOff,
    title: "Não precisa aparecer",
    description: "Ou vender para conhecidos.",
  },
  {
    icon: CircleDollarSign,
    title: "Comece sem investir",
    description: "Use ferramentas e técnicas que não custam nada.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary drop-shadow-sm" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
