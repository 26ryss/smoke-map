import SearchArea from "@/app/_components/organisms/pages/home/search-area"
import AreaSection from "@/app/_components/organisms/pages/home/area-section"

export default function HomeTemplatePc() {
  return (
    <div>
      <div className="relative w-full min-w-[1000px] h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/top-visual.jpg')] bg-cover bg-center brightness-[.4] contrast-50 -z-10"></div>
          <div className="relative z-10 filter-none py-20">
            <div className="flex flex-col items-center justify-center space-y-10">
              <h1 className="text-white font-extrabold text-3xl">Smoke Mapで煙草が吸えるカフェを探そう</h1>
              <div className="w-[1000px] px-2">
                <SearchArea />
              </div>
            </div>
          </div>
      </div>
      <div className="w-[1000px] mx-auto py-10 mt-10">
        <AreaSection />
      </div>
    </div>
  )
}