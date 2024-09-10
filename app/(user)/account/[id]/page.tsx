import Title from "@/app/_components/ui-parts/title";
import SubTitle from "@/app/_components/ui-parts/sub-title";
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="pb-10">
        <Title text={"マイページ"} />
      </div>
      <div className="space-y-4">
        <div className="pb-2 border-b border-slate-700">
          <SubTitle text={"店舗追加申請"} />
        </div>
        <p className="text-gray-900 pb-2">マップに掲載されていない喫煙可能なカフェを見つけた際には、店舗追加申請をぜひともよろしくお願いします！
        </p>
        <Link href="/account/store-add-request" className="text-blue-500 hover:text-blue-800">
          店舗の追加申請を行う
        </Link>
      </div>
    </div>
  );
}