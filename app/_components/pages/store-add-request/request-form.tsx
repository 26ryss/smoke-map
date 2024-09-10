"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { type User } from "@supabase/supabase-js"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createStoreAddRequest } from "@/app/lib/actions"

const FormSchema = z.object({
  name: z.string({
    required_error: "店名を入力してください",
  }).min(1, {
    message: "店名を入力してください",
  }),
  address: z.string({
    required_error: "住所を入力してください",
  }).min(1, {
    message: "住所を入力してください",
  }),
  url: z.string().optional(),
})

export function RequestForm({ user } : { user : User | null }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      address: "",
      url: ""
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
      if (!user) {
        return
      }
      const { name, address, url } = data
      await createStoreAddRequest({
        uid: user.id,
        name: name,
        address: address,
        url: url,
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">
        {/* 名前 */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>店名</FormLabel>
              <FormControl>
                <Input placeholder="喫茶XX" {...field} />
              </FormControl>
              <FormDescription>
                店名を記入してください
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 住所 */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>住所</FormLabel>
              <FormControl>
                <Input placeholder="東京都渋谷区神南X-XX-X" {...field} />
              </FormControl>
              <FormDescription>
                数字やハイフンは半角で記入してください
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* URL */}
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.co.jp/" {...field} />
              </FormControl>
              <FormDescription>
                店舗のホームページがある場合はURLを記入してください
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-8">
          <Button type="submit">申請</Button>
        </div>
      </form>
    </Form>
  )
}
