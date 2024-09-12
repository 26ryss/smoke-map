import { IoStarSharp } from 'react-icons/io5';
import { colors } from '@/styles/colors';
import { GiCigarette } from "react-icons/gi";

export default function ReviewScore({
  reviewScore,
  reviewCount
}: {
  reviewScore: number;
  reviewCount: number;
}) {
  return (
    <div className="flex flex-row items-center">
      <p className="text-sm text-gray-500 mr-2">
        {reviewScore}
      </p>
      <div className="flex flex-row mr-1">
        {Array.from({ length: 5}, (_, i) => (
          <IoStarSharp
            key={i}
            size={18}
            color={i < reviewScore ? colors.star : colors.gray200}
          />
        ))}
      </div>
      <div className="text-sm text-gray-500">
        ({reviewCount})
      </div>
  </div>
  );
}