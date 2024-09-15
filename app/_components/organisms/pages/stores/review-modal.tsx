'use client';

import { IoIosClose } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { type User } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { createReview, updateReview } from "@/app/lib/actions";
import { Review } from "@/app/lib/definitions";


const reviewSchema = z.object({
  score: z
    .number({
      required_error: "点数を入力してください",
    })
    .gt(0, {
      message: "1-5の範囲で入力してください",
    })
    .lt(6, {
      message: "1-5の範囲で入力してください",
    }),
  comment: z.string().optional(),
})

export default function ReviewModal({
  isOpen,
  setIsOpen,
  user,
  storeId,
  pastReview
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User | null;
  storeId: number;
  pastReview: Review | undefined;
}) {
  return(
  <>
    {isOpen ? (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-modal-background flex justify-center items-center">
        <div className="bg-white p-8 md:p-16 rounded relative">
          <button 
            className="absolute top-2 right-2 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose size={30}/>
          </button>
          <ReviewForm setIsOpen={setIsOpen} user={user} storeId={storeId} pastReview={pastReview} />
        </div>
        
      </div>
    ) : (
      <></>
    )
    }
  </>
  )
}

export function ReviewForm({
  setIsOpen,
  user,
  storeId,
  pastReview,
  } : {
    setIsOpen: (isOpen: boolean) => void;
    user: User | null;
    storeId: number;
    pastReview: Review | undefined;
  }) {
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      score: pastReview? pastReview.score : undefined,
      comment: pastReview? pastReview.comment : "",
    }
  })

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
    if (!user){
      return;
    }
    if (values.comment === ""){
      values.comment = undefined;
    }
    const reviewAction = pastReview === undefined ? createReview : updateReview;

    const { error } = await reviewAction({
      uid: user.id, 
      storeId: storeId,
      score: values.score,
      comment: values.comment,
    }) || {};

    if (!error) {
      setIsOpen(false);
    }
  }

  const wordOnButton = pastReview === undefined ? "投稿" : "更新";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="score"
          render={({ field }) => (
            <FormItem>
              <FormLabel>点数</FormLabel>
              <FormControl>
                <Input 
                  placeholder="" 
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(Number(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>レビュー</FormLabel>
              <FormControl>
                <Textarea placeholder="口コミ本文を記入してください" {...field} className="md:w-96"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >{wordOnButton}</Button>
      </form>
    </Form>
  )
}