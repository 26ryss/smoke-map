"use client";

import { createUser, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function Form(){
  const initialState: State = { message: null, errors: {}};
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <div className="bg-gray-50 p-4 md:px-16 md:py-8">
        <div className="mb-4">
          <h1 className="flex text-xl font-bold justify-center">新規登録</h1>
        </div>
        {/* ユーザー名 */}
        <div className="mb-3">
          <label htmlFor="displayName" className="mb-2 block text-sm font-medium">
            ユーザー名
          </label>
          <div className="relative">
            <input
              id="displayName"
              name="displayName"
              className="peer block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            />
          </div>
        </div>

        {/* 名前 */}
        <div className="mb-3">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            名前
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              className="peer block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            />
          </div>
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
              className="peer block w-full border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button type="submit">新規登録</Button>
        </div>
      </div>
    </form>
  )
}