import Image from "next/image";
import { Award, BarChart, Briefcase } from "lucide-react";

export function Author() {
    return (
        <section id="author" className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <Image 
                            src="https://placehold.co/300x300.png"
                            alt="Foto do Autor"
                            width={300}
                            height={300}
                            className="rounded-full shadow-2xl border-4 border-primary"
                            data-ai-hint="professional photo"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
                            Sobre o Autor
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            <strong>João da Silva</strong> é um empreendedor digital com mais de 10 anos de experiência em marketing e negócios online. Após falhar em 5 negócios diferentes, ele desenvolveu um método à prova de falhas que já ajudou milhares de pessoas a alcançarem a independência financeira.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Briefcase className="h-6 w-6 text-primary" />
                                <span className="text-foreground">Especialista em estratégias de crescimento para iniciantes.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BarChart className="h-6 w-6 text-primary" />
                                <span className="text-foreground">Mais de R$ 2 milhões em vendas online como produtor e afiliado.</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="h-6 w-6 text-primary" />
                                <span className="text-foreground">Reconhecido como um dos top 10 influenciadores de marketing digital em 2024.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}