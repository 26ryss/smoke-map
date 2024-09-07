'use client';
import { MdEdit } from "react-icons/md";
import { LuCigarette, LuCigaretteOff } from "react-icons/lu";
import { type User } from '@supabase/supabase-js';
import { VoteData } from "@/app/lib/definitions";

export default function ActionPanel({
  setIsReviewModalOpen,
  setIsSmokeVoteModalOpen,
  user,
  smokeVoteData,
} : {
  setIsReviewModalOpen: (isOpen: boolean) => void;
  setIsSmokeVoteModalOpen: (isOpen: boolean) => void;
  user: User | null;
  smokeVoteData: VoteData;
}) {
  return (
    <div className="bg-stone-200 p-4 flex">
      <AbleToSmokeButton count={smokeVoteData.isAbleToSmoke} setIsOpen={setIsSmokeVoteModalOpen}/>
      <div className="ml-2"/>
      <NotAbleToSmokeButton count={smokeVoteData.isNotAbleToSmoke} setIsOpen={setIsSmokeVoteModalOpen} /> 
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

export function AbleToSmokeButton({
  count,
  setIsOpen,
}:{
  count:number;
  setIsOpen:(isOpen:boolean) => void;
}) {
  return (
    <button 
      className="flex items-center bg-white px-3 py-1 rounded"
      onClick={() => setIsOpen(true)}
    >
      <LuCigarette size={20} color="#1e293b"/>
      <p className="font-semibold pl-2">{count}</p>
    </button>
  )
}

export function NotAbleToSmokeButton({
  count,
  setIsOpen,
}:{
  count:number;
  setIsOpen:(isOpen:boolean) => void;
}) {
  return (
    <button 
      className="flex items-center bg-white px-3 py-1 rounded"
      onClick={() => setIsOpen(true)}  
    >
    <LuCigaretteOff size={20} color="#1e293b"/>
    <p className="font-semibold pl-2">{count}</p>
  </button>
  )
}