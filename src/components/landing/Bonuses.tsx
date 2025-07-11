import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CheckCircle } from "lucide-react";

const bonuses = [
    { title: "Bônus #1: Guia de Copywriting Persuasivo", value: "R$ 97,00" },
    { title: "Bônus #2: Pack com 10 Templates de Posts para Instagram", value: "R$ 67,00" },
    { title: "Bônus #3: Planilha de Controle Financeiro para Iniciantes", value: "R$ 47,00" },
    { title: "Bônus #4: Acesso ao nosso Grupo VIP de Alunos", value: "Inestimável" },
]

export function Bonuses() {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
            <Gift className="h-12 w-12 mx-auto text-accent mb-4" />
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                E ainda tem mais... Leve 4 Bônus Irresistíveis!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Comprando hoje, você garante acesso gratuito a estes materiais exclusivos que vão acelerar seus resultados.
            </p>
        </div>
        <Card className="bg-card shadow-xl border-accent border-2">
            <CardHeader className="bg-accent/10">
                <CardTitle className="text-center text-xl text-foreground">
                    Valor total dos bônus: <span className="line-through">R$ 300+</span> <span className="text-accent font-bold">GRÁTIS HOJE</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0"/>
                        <div>
                            <p className="font-semibold text-foreground">{bonus.title}</p>
                            <p className="text-sm text-muted-foreground">Valor: <span className="font-medium">{bonus.value}</span></p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </section>
  )
}