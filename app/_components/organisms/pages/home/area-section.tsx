import AreaRow from "./area-row"
import { fetchAllAreas } from "@/app/lib/data"


export default async function AreaSection() {
  const areas = await fetchAllAreas();
  return(
    <>
      <div className="w-full h-full flex justify-center">
        <h2 className="text-2xl font-bold mb-10">エリアから見つける</h2>
      </div>
      <AreaRow prefecture="東京都" areas={areas} />
    </>
  )
}