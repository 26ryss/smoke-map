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
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { createSmokeVote, updateSmokeVote } from "@/app/lib/actions";


const FormSchema = z.object({
  vote: z.boolean({
    required_error: "選択してください",
  })
})

export default function SmokeVoteModal({
  isOpen,
  setIsOpen,
  user,
  storeId,
  pastVote,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User | null;
  storeId: number;
  pastVote: boolean | undefined;
}) {
  return(
  <>
    {isOpen ? (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-modal-background flex justify-center items-center">
        <div className="bg-white px-16 pt-12 pb-6 rounded relative">
          <button 
            className="absolute top-2 right-2 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose size={30}/>
          </button>
          <ReviewForm setIsOpen={setIsOpen} user={user} storeId={storeId} pastVote={pastVote}/>
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
  pastVote,
  } : {
    setIsOpen: (isOpen: boolean) => void;
    user: User | null;
    storeId: number;
    pastVote: boolean | undefined;
  }) {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      vote: pastVote,
    }
  })

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    if (!user) {
      return;
    }

    const voteAction = pastVote === undefined ? createSmokeVote : updateSmokeVote;

    const { error } =
      (await voteAction({
        uid: user.id,
        storeId: storeId,
        vote: values.vote,
      })) || {};

    if (!error) {
      setIsOpen(false);
    }
  }

  const wordOnButton = pastVote === undefined ? "投票" : "更新";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="vote"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  value={field.value?.toString()}
                  onValueChange={(value) => field.onChange(value === 'true')}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 w-44">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      吸えた
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      吸えなかった
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
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