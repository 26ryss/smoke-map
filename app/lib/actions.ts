'use server';
 
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type State = {
  errors?: {
    displayName?: string[];
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}