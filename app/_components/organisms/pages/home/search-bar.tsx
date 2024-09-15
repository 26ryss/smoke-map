'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/app/_components/ui-parts/input"
import { Button } from "@/app/_components/ui-parts/button"

export default function SearchBar() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    const url = `/search/${data.area}`
    router.push(url)
  }

  return (
    <div className="w-full h-12">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-12 flex rounded-sm">
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem className="w-4/5">
                <FormControl>
                  <Input placeholder="例) 渋谷" className="w-full h-full text-md border-gray-300 rounded-none rounded-l-sm shadow-none  focus:ring-offset-0" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="h-full rounded-none rounded-r-sm w-1/5 space-x-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <p className="font-extrabold hidden md:block">検索する</p>
          </Button>
        </form>
      </Form>
    </div>
  )
}

const formSchema = z.object({
  area: z.string().min(1, {
    message: "エリアを入力してください",
  }).max(50, {
    message: "エリアは50文字以内で入力してください",
  }),
})