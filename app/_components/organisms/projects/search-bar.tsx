'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'
import SuggestBox from "@/app/_components/organisms/projects/suggest-box"
import { isAreaExist } from "@/app/lib/data"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/app/_components/ui-parts/input"
import { Button } from "@/app/_components/ui-parts/button"
import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const areaExist = await isAreaExist(data.area);
    if (areaExist){
      const url = `/search/${data.area}`;
      router.push(url);
    } else {
      form.setError('area', { type: 'manual', message: 'エリア・駅が見つかりません' });
    }
  }

  const handleInputChange = useDebouncedCallback((term)=>{
    setQuery(term);
  }, 700);

  return (
    <div className="w-full h-full">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full flex rounded-sm">
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem className="w-4/5">
                <FormControl>
                  <Input 
                    placeholder="例) 渋谷" 
                    className="w-full h-full text-md border-gray-300 rounded-none rounded-l-sm shadow-none  focus:ring-offset-0"
                    {...field}
                    onChange={
                      (e) => {
                        field.onChange(e);
                        handleInputChange(e.currentTarget.value);
                      }
                    }
                    />
                </FormControl>
                <FormMessage>{form.formState.errors?.area?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button className="h-full rounded-none rounded-r-sm w-1/5 space-x-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <p className="font-extrabold hidden md:block">検索する</p>
          </Button>
        </form>
      </Form>
      <div className="z-50">
        <SuggestBox query={query} />
      </div>
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