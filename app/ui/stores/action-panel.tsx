import { MdEdit } from "react-icons/md";
import { LuCigarette, LuCigaretteOff } from "react-icons/lu";

export default function ActionPanel() {
  return (
    <div className="bg-stone-200 p-4 flex">
      <AbleToSmokeButton />
      <div className="ml-2"/>
      <NotAbleToSmokeButton /> 
      <div className="ml-2"/>
      <CreateReviewButton />
    </div>
  )
}

export function CreateReviewButton() {
  return (
    <button className="flex items-center bg-white px-3 py-1 rounded">
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