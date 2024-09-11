const requests = [
  {
    id: 1,
    name: "喫茶店1",
    address: "東京都渋谷区宇多川町1-2-3",
    url: "https://example.com",
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    status: "pending",
    created_at: "2021-09-01T00:00:00Z",
  },
  {
    id: 2,
    name: "喫茶店2",
    address: "東京都渋谷区宇多川町1-2-3",
    url: "https://example.com",
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    status: "pending",
    created_at: "2021-09-01T00:00:00Z",
  },
  {
    id: 3,
    name: "喫茶店3",
    address: "東京都渋谷区宇多川町1-2-3",
    url: "https://example.com",
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    status: "pending",
    created_at: "2021-09-01T00:00:00Z",
  },
]

import { formatDateToLocal } from '@/app/lib/utils';

export default function StoreAddRequestTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 pt-0">
          <table className="min-w-full text-gray-900 table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium">
                  店名
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  住所
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  URL
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  投稿日
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {requests?.map((request) => (
                <tr
                  key={request.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-5 pl-6 pr-3">
                    {request.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {request.address}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {request.url}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(request.created_at)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {/* <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}