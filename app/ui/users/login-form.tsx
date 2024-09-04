import { createUser, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { signIn } from '@/auth';


export default function Form(){

  return (
    <form action={async (formData) => {
      'use server'
      await signIn("credentials", formData);
    }}>
      <div className="bg-gray-50 p-4 md:px-16 md:py-8">
        <div className="mb-4">
          <h1 className="flex text-xl font-bold justify-center">ログイン</h1>
        </div>

        {/* メールアドレス */}
        <div className="mb-3">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            メールアドレス
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              className="peer block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              type="email"
              defaultValue=""
            />
          </div>
        </div>

        {/* パスワード */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            パスワード
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="peer block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button type="submit">ログイン</Button>
        </div>
      </div>
    </form>
  )
}