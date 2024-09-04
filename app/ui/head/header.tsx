import Image from 'next/image';
import SearchBar from '@/app/ui/head/search-bar';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { signOutAction } from '@/app/lib/actions';

export default async function Header() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
  }
  const accountUrl = user ? `/account/${user.id}` : '/login';

  return (
    <header className=" text-white border-b-2 border-slate-100">
      <nav aria-label="Global" className="flex flex-row items-center px-6 py-3 lg:px-8 justify-between">
        {/* logo */}
        <div className="flex flex-row items-center">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo of this service</span>
              <Image 
                src="/logo.png"
                width={180}
                height={10}
                className="hidden md:block"
                alt="Logo of this service"
              />
            </Link>
          </div>
          <div className="ml-10">
            <SearchBar />
          </div>
        </div>
        {!user ? (
          <div className="flex items-center">
            <Link href="/signup" className="text-sm font-semibold leading-6 text-gray-900 px-4">
              会員登録
            </Link>
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 px-4">
              ログイン
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href={accountUrl} className="text-sm font-semibold leading-6 text-gray-900 px-4">
              マイページ
            </Link>
            <form action={signOutAction}>
              <button className="text-sm font-semibold leading-6 text-gray-900 px-4">
                ログアウト
              </button>
            </form>
        </div>
        )}
      </nav>
    </header>
  );
}