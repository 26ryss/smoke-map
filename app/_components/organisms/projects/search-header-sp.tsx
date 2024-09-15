import SearchBar from "@/app/_components/organisms/projects/search-bar"

export default function SearchHeaderSp() {
  return (
    <div className="p-2 py-3 shadow border-b md:hidden">
      <div className="h-10">
        <SearchBar />
      </div>  
  </div>
  )
}