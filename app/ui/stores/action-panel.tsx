'use client';
import { MdEdit } from "react-icons/md";
import { LuCigarette, LuCigaretteOff } from "react-icons/lu";
import { type User } from '@supabase/supabase-js';

export default function ActionPanel({
  setIsOpen,
  user,
} : {
  setIsOpen: (isOpen: boolean) => void;
  user: User | null;
}) {
  return (
    <div className="bg-stone-200 p-4 flex">
      <AbleToSmokeButton />
      <div className="ml-2"/>
      <NotAbleToSmokeButton /> 
      <div className="ml-2"/>
      <CreateReviewButton setIsOpen={setIsOpen} user={user}/>
    </div>
  )
}

export function CreateReviewButton({
  setIsOpen,
  user,
} : {
  setIsOpen: (isOpen: boolean) => void;
  user: User | null;
}) {
  console.log(user);
  return (
    <button 
      className="flex items-center bg-white px-3 py-1 rounded"
      onClick={() => {
        if (user) {
          setIsOpen(true)
        } else {
          alert("ログインしてください");
        }
      }}
    >
      <MdEdit size={20} color="#1e293b"/>
      <p className="font-semibold">レビュー</p>
    </button>
  )
}

export function AbleToSmokeButton() {
  return (
    <button className="flex items-center bg-white px-3 py-1 rounded">
    <LuCigarette size={20} color="#1e293b"/>
  </button>
  )
}

export function NotAbleToSmokeButton() {
  return (
    <button className="flex items-center bg-white px-3 py-1 rounded">
    <LuCigaretteOff size={20} color="#1e293b"/>
  </button>
  )
}