
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Book, Gift, Video } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    // Mock data, will be replaced with real user data
    const userName = "Aluno(a)"; 
    const progress = 25;
    const completedModules = 1;
    const totalModules = 4;

    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Bem-vindo(a), {userName}!</CardTitle>
                    <CardDescription>
                        Aqui está tudo que você precisa para começar sua transformação.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <h3 className="text-sm font-medium">Seu Progresso</h3>
                            <Progress value={progress} className="mt-2 h-2" />
                            <p className="text-xs text-muted-foreground mt-1">{completedModules} de {totalModules} concluídos</p>
                        </div>
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                            <Link href="/dashboard/library">Continuar de onde parou</Link>
                        </Button>
                     </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                            <Book className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Ebook Principal</CardTitle>
                        <CardDescription>Método completo passo a passo para sua jornada de sucesso online.</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                        <Button asChild className="w-full">
                            <Link href="/dashboard/library">BAIXAR AGORA</Link>
                        </Button>
                    </CardFooter>
                </Card>

                 <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                            <Gift className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Bônus Exclusivos</CardTitle>
                        <CardDescription>Templates e ferramentas extras para acelerar seus resultados.</CardDescription>
                    </CardHeader>
                     <CardFooter className="mt-auto">
                        <Button asChild className="w-full">
                            <Link href="/dashboard/bonuses">ACESSAR</Link>
                        </Button>
                    </CardFooter>
                </Card>

                 <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                            <Video className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>Vídeo Aulas</CardTitle>
                        <CardDescription>Conteúdo em vídeo para complementar e aprofundar seu aprendizado.</CardDescription>
                    </CardHeader>
                     <CardFooter className="mt-auto">
                        <Button asChild className="w-full">
                           <Link href="/dashboard/library">ASSISTIR</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
