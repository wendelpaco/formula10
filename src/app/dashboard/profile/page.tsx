
'use client'

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { User as FirebaseUser } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, KeyRound, Bell, Loader2 } from "lucide-react";
import { Skeleton } from '@/components/ui/skeleton';


export default function ProfilePage() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Handle case where user is not logged in, maybe redirect
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const getMemberSince = () => {
    if (user?.metadata.creationTime) {
        return new Date(user.metadata.creationTime).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    }
    return 'Data indisponível';
  }
  
  if (loading) {
    return (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8">
            <div>
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-72 mt-2" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                 <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <Skeleton className="h-6 w-40" />
                             <Skeleton className="h-4 w-56 mt-1" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Skeleton className="h-20 w-20 rounded-full" />
                                <div>
                                    <Skeleton className="h-6 w-32" />
                                    <Skeleton className="h-4 w-48 mt-2" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </div>
    )
  }

  if (!user) {
    return (
        <div className="text-center py-16 text-muted-foreground">
            <p>Você precisa estar logado para ver esta página.</p>
        </div>
    )
  }

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
                                <AvatarImage src={user.photoURL || undefined} alt="Avatar do usuário" />
                                <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-lg font-semibold">{user.displayName || 'Nome não definido'}</h3>
                                <p className="text-sm text-muted-foreground">Membro desde: {getMemberSince()}</p>
                                <Button variant="outline" size="sm" className="mt-2">Alterar foto</Button>
                            </div>
                         </div>
                         <div className="space-y-2">
                             <Label htmlFor="name">Nome completo</Label>
                             <Input id="name" defaultValue={user.displayName || ''} />
                         </div>
                          <div className="space-y-2">
                             <Label htmlFor="email">Email</Label>
                             <Input id="email" type="email" defaultValue={user.email || ''} disabled />
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

