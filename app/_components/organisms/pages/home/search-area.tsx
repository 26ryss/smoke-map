import SearchBar from "../../projects/search-bar"

export default function SearchArea() {
  return (
    <div className="flex justify-center items-center w-full h-40 bg-white shadow-md rounded">
      <div className="relative w-full px-10">
        <div className="absolute -top-8 text-sm text-gray-600 font-bold">エリア・駅</div>
        <div className="h-12">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}