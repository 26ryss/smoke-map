'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
 
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

const CreateUser = FormSchema.omit({ id: true });
 
export async function createUser(prevState: State, formData: FormData){
  const validatedFields = CreateUser.safeParse({
    displayName: formData.get('displayName'),
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User',
    }
  }

  const { displayName, name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await sql`
    INSERT INTO users (display_name, name, email, password)
    VALUES (${displayName}, ${name}, ${email}, ${hashedPassword})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  revalidatePath('/');
  redirect('/');
}
 