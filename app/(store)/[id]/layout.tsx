import SearchHeaderSp from "@/app/_components/organisms/projects/search-header-sp"

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <SearchHeaderSp />
      <div className="px-4 py-4 md:px-0 md:w-[1000px] md:mx-auto md:py-8">
        {children}
      </div>
    </div>
  )
}