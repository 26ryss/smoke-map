'use client';
import { MdEdit } from "react-icons/md";
import { LuCigarette } from "react-icons/lu";
import { type User } from '@supabase/supabase-js';
import { VoteData } from "@/app/lib/definitions";

export default function ActionPanel({
  setIsReviewModalOpen,
  setIsSmokeVoteModalOpen,
  user,
} : {
  setIsReviewModalOpen: (isOpen: boolean) => void;
  setIsSmokeVoteModalOpen: (isOpen: boolean) => void;
  user: User | null;
}) {
  return (
    <div className="flex">
      <SmokeVoteButton setIsOpen={setIsSmokeVoteModalOpen} user={user}/>
      <div className="ml-2"/>
      <CreateReviewButton setIsOpen={setIsReviewModalOpen} user={user}/>
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
  return (
    <button 
      className="flex items-center bg-white border border-gray-900 px-3 py-1 rounded space-x-3 hover:bg-gray-100"
      onClick={() => {
        if (user) {
          setIsOpen(true)
        } else {
          alert("ログインしてください");
        }
      }}
    >
      <MdEdit size={20} color="#1e293b"/>
      <p className="font-semibold text-gray-600 text-sm">レビュー</p>
    </button>
  )
}

export function SmokeVoteButton({
  setIsOpen,
  user,
}:{
  setIsOpen:(isOpen:boolean) => void;
  user: User | null;
}) {
  return (
    <button 
      className="flex items-center bg-white border border-gray-900 px-3 py-1 rounded space-x-4 hover:bg-gray-100"
      onClick={() => {
        if (user){
          setIsOpen(true);
        } else {
          alert("ログインしてください");
        }}}
    >
      <LuCigarette size={20} color="#1e293b"/>
      <p className="font-semibold text-gray-600 text-sm">投稿する</p>
    </button>
  )
}

