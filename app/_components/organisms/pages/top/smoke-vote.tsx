import { LuCigarette, LuCigaretteOff } from "react-icons/lu";

export default function SmokeVote({
  smokeCount,
  nonSmokeCount,
}: {
  smokeCount: number;
  nonSmokeCount: number;
}) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row mr-2 items-center">
        <LuCigarette size={15} className="mr-1" />
        <p className="text-sm text-gray-500 mr-2">
          {smokeCount}
        </p>
      </div>
      <div className="flex flex-row items-center">
        <LuCigaretteOff size={15} className="mr-1" />
        <p className="text-sm text-gray-500 mr-2">
          {nonSmokeCount}
        </p>
      </div>
    </div>
  )
}