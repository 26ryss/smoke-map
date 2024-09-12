import SearchArea from "@/app/_components/organisms/pages/home/search-area"
import AreaSection from "@/app/_components/organisms/pages/home/area-section"

export default function HomeTemplate() {
  return(
    <div>
      <div className="relative w-full h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/top-visual.jpg')] bg-cover bg-center brightness-[.4] contrast-50 -z-10"></div>
          <div className="relative z-10 filter-none py-10">
            <div className="flex flex-col items-center space-y-10">
              <h1 className="text-white font-extrabold text-xl px-2">
                Smoke Mapで <br />
                煙草が吸えるカフェを探そう
              </h1>
              <div className="w-full px-4">
                <SearchArea />
              </div>
            </div>
          </div>
      </div>
      <div className="py-10 mt-10">
        <AreaSection />
      </div>
    </div>
  )
}