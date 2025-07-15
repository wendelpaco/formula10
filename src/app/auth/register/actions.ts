
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
    let errorMessage = "Ocorreu um erro desconhecido.";
    if (error.code === 'auth/email-already-exists') {
      errorMessage = 'Este endereço de e-mail já está em uso por outra conta.';
    } else if (error instanceof z.ZodError) {
      errorMessage = 'Dados inválidos. Por favor, verifique os campos.'
    }
    // You can add more specific Firebase error codes here
    console.error("Firebase Admin SDK error:", error);
    return { success: false, error: errorMessage };
  }
}
