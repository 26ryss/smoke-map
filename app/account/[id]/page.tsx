import Title from "@/app/_components/ui-parts/title";
import SubTitle from "@/app/_components/ui-parts/sub-title";

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
        <div className="h-screen">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8YmSv4bJMXJBRe22J2Irglitg_AvdTAOSWKNrC5iJWKzbsQ/viewform?embedded=true" width="100%" height="100%">Loading…</iframe>
        </div>
      </div>
    </div>
  );
}