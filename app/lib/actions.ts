'use server';
 
import { z } from 'zod';
import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from '@/utils/utils';
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

export const signUpAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const supabase = createClient();
  
  if (!email || ! password) {
    return { error: "メールアドレスとパスワードを入力してください" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/signup", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/signup",
      "登録が完了しました。メールを確認してください"
    )
  }
}

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect('error', '/signin', error.message);
  }

  return redirect('/');
}

export const signOutAction = async() => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect('/');
}