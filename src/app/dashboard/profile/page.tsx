
'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, KeyRound, Bell } from "lucide-react";


// Mock data, will be replaced with real user data from Firebase
const userData = {
    name: "Aluno(a)",
    email: "aluno@email.com",
    memberSince: "15 de Julho, 2024",
    avatarUrl: ""
}

export default function ProfilePage() {
  return (
     <div className="grid auto-rows-max items-start gap-4 md:gap-8">
        <div>
            <h1 className="text-2xl font-bold tracking-tight">Meu Perfil</h1>
            <p className="text-muted-foreground">Gerencie suas informações pessoais e configurações.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Informações Pessoais</CardTitle>
                        <CardDescription>Atualize seu nome e e-mail aqui.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center gap-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={userData.avatarUrl} alt="Avatar do usuário" />
                                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-lg font-semibold">{userData.name}</h3>
                                <p className="text-sm text-muted-foreground">Membro desde: {userData.memberSince}</p>
                                <Button variant="outline" size="sm" className="mt-2">Alterar foto</Button>
                            </div>
                         </div>
                         <div className="space-y-2">
                             <Label htmlFor="name">Nome completo</Label>
                             <Input id="name" defaultValue={userData.name} />
                         </div>
                          <div className="space-y-2">
                             <Label htmlFor="email">Email</Label>
                             <Input id="email" type="email" defaultValue={userData.email} disabled />
                         </div>
                         <Button>Salvar Alterações</Button>
                    </CardContent>
                 </Card>
            </div>
             <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Configurações</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                           <KeyRound className="mr-2" /> Alterar Senha
                        </Button>
                         <Button variant="outline" className="w-full justify-start">
                           <Bell className="mr-2" /> Notificações
                        </Button>
                         <Button variant="destructive" className="w-full justify-start">
                           <User className="mr-2" /> Encerrar Conta
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
     </div>
  );
}
