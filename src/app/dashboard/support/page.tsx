
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, Mail, MessageSquare } from "lucide-react";


export default function SupportPage() {
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2 justify-center md:justify-start">
                <LifeBuoy className="h-6 w-6 text-primary" />
                Suporte
            </h1>
            <p className="text-muted-foreground">Precisa de ajuda? Entre em contato conosco.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Enviar uma mensagem</CardTitle>
                    <CardDescription>Preencha o formulário abaixo e nossa equipe responderá em breve.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input id="subject" placeholder="Ex: Dúvida sobre o Módulo 2" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="message">Sua mensagem</Label>
                        <Textarea id="message" placeholder="Descreva sua dúvida ou problema aqui..." className="min-h-[150px]" />
                    </div>
                     <Button className="w-full">Enviar Mensagem</Button>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Outras formas de contato</CardTitle>
                    <CardDescription>Alternativas para falar conosco.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <Mail className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-muted-foreground text-sm">Envie um e-mail direto para nosso suporte.</p>
                            <a href="mailto:suporte@rendaonline.com" className="text-primary font-medium text-sm hover:underline">suporte@rendaonline.com</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg border">
                        <MessageSquare className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Comunidade</h3>
                            <p className="text-muted-foreground text-sm">Tire dúvidas com outros alunos no grupo exclusivo.</p>
                             <Button variant="outline" size="sm" className="mt-1">Acessar Grupo</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
