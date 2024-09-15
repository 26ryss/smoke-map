import SideBar from "@/app/_components/organisms/pages/search/sidebar"
import CardArea from "@/app/_components/organisms/pages/search/card-area"
import { Store, ReviewData, VoteData } from "@/app/lib/definitions"
import Pagination from "@/app/_components/organisms/pages/top/pagination";
import SearchHeaderSp from "../../organisms/projects/search-header-sp";

export default function Template({ 
  area,
  stores,
  reviews,
  votes,
  totalPages,
 }: { 
  area: string;
  stores: Store[];
  reviews: { [key: number]: ReviewData };
  votes: { [key: number]: VoteData };
  totalPages: number;
}) {
  return (
    <div className="flex md:py-8">
      <div className="w-3/12 h-[120px] hidden md:block">
        <SideBar area={area}/>
      </div>
      <div className="w-full md:pl-12">
        <SearchHeaderSp />
        <h1 className="font-semibold px-4 py-1 text-sm bg-gray-100 md:text-2xl md:font-bold text-gray-800 md:mb-10 md:bg-gray-50 md:px-5 md:py-8">{area}のカフェ</h1>
        <div>
          <CardArea stores={stores} reviews={reviews} votes={votes}/>
          <div className="w-full flex justify-center py-4">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  )
}