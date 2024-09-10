import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { Button } from "@/app/_components/ui-parts/button"


export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const url = user? `/account/${user.id}` : '/login';

  return (
    <div className="space-y-8">
      <div>
        <p>フォームが送信されました</p>
      </div>
      <div>
        <Button>
          <Link href={url}>
            マイページに戻る
          </Link>
        </Button>
      </div>
    </div>
  )
}