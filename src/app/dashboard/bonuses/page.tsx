
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CheckCircle } from "lucide-react";


const bonuses = [
    { 
        title: "Checklist Completo",
        description: "O passo a passo para não esquecer de nada.",
        value: "R$ 47,00",
        isNew: true
    },
    { 
        title: "Grupo VIP de Alunos",
        description: "Acesso exclusivo à comunidade de membros.",
        value: "Inestimável",
        isNew: false
    },
    { 
        title: "Planilha Financeira",
        description: "Controle seus ganhos e despesas.",
        value: "R$ 67,00",
        isNew: false
    },
     { 
        title: "10 Templates de Posts",
        description: "Designs prontos para suas redes sociais.",
        value: "R$ 97,00",
        isNew: false
    },
];

export default function BonusesPage() {
  return (
     <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
                <Gift className="h-6 w-6 text-primary" />
                Seus Bônus Exclusivos
            </h1>
            <p className="text-muted-foreground">Conteúdo adicional para acelerar seus resultados.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bonuses.map((bonus, index) => (
                <Card key={index} className="flex flex-col relative overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
                     {bonus.isNew && (
                         <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">NOVO</Badge>
                     )}
                    <CardHeader>
                        <CardTitle>{bonus.title}</CardTitle>
                        <CardDescription>{bonus.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm font-medium text-muted-foreground">
                            Valor: <span className="text-foreground font-bold">{bonus.value}</span>
                        </p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <Button className="w-full">
                           <CheckCircle className="mr-2" /> RESGATAR AGORA
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
     </div>
  );
}
