import SideBar from "@/app/_components/organisms/pages/search/sidebar"

export default function Template({ area }: { area: string}) {
  return (
    <div className="flex py-8">
      <div className="w-3/12 h-[120px] hidden md:block">
        <SideBar area={area}/>
      </div>
      <div className="w-full md:pl-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-10 bg-gray-50 px-5 py-8">{area}のカフェ</h1>
        <div>card area</div>
      </div>
    </div>
  )
}