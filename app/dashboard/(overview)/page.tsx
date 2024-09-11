import { Suspense } from "react"
import StoreAddRequestTable from "@/app/_components/pages/dashboard/store-add-requests-table"

export default function Page() {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">店舗の追加申請</h1>
      </div>
      <Suspense>
        <StoreAddRequestTable />
      </Suspense>
    </div>
  )
}