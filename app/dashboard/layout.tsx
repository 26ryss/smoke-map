import SideNav from "@/app/_components/pages/dashboard/sidenav"

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className="flex-none w-64">
        <SideNav />
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}