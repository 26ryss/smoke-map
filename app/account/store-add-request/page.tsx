import { createClient } from "@/utils/supabase/server";
import Title from "@/app/_components/ui-parts/title";
import { RequestForm } from "@/app/_components/organisms/pages/store-add-request/request-form";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8">
      <div>
        <Title text={'店舗追加申請ページ'} />
      </div>
      <div>
        <p className="text-gray-900">以下の情報を入力して申請してください</p>
      </div>
      <div>
        <RequestForm user={user} />
      </div>
    </div>
  )
}