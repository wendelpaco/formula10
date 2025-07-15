
'use server';

import { z } from 'zod';
import { auth } from '@/lib/firebase-admin'; // Using Admin SDK on the server

const formSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof formSchema>;

export async function createUser(data: FormData) {
  if (!auth) {
      return { success: false, error: "O serviço de autenticação não está disponível. Verifique a configuração do servidor." };
  }

  try {
    const validatedData = formSchema.parse(data);

    const userRecord = await auth.createUser({
      email: validatedData.email,
      password: validatedData.password,
      displayName: validatedData.fullName,
      emailVerified: false, // You can set this to true if you implement email verification
    });

    return { success: true, userId: userRecord.uid };
  } catch (error: any) {
    let errorMessage = "Ocorreu um erro desconhecido ao criar a conta.";
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      errorMessage = 'Dados inválidos. Por favor, verifique os campos.';
       console.error("Zod validation error:", error.flatten().fieldErrors);
       return { success: false, error: errorMessage };
    }
    
    // Handle Firebase Admin SDK errors
    if (error.code === 'auth/email-already-exists') {
      errorMessage = 'Este endereço de e-mail já está em uso por outra conta.';
    } else if (error.code === 'auth/invalid-password') {
        errorMessage = 'A senha é inválida. Deve ter pelo menos 6 caracteres.';
    }

    console.error("Firebase Admin SDK error:", error);
    return { success: false, error: errorMessage };
  }
}
