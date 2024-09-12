import Image from 'next/image';
import SearchBar from '@/app/_components/ui-parts/search-bar';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { signOutAction } from '@/app/lib/actions';
import { UserIcon } from '@heroicons/react/24/outline';

export default async function Header() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
  }
  const accountUrl = user ? `/account/${user.id}` : '/login';

  return (
    <header className="text-white md:w-[1000px] md:mx-auto">
      <nav aria-label="Global" className="flex flex-row items-center py-1 px-2 md:py-3 justify-between">
        {/* logo */}
        <div className="flex flex-row items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Logo of this service</span>
              <Image 
                src="/logo.png"
                width={180}
                height={10}
                className="hidden md:block"
                alt="Logo of this service"
              />
              <Image 
                src="/logo.png"
                width={130}
                height={10}
                className="md:hidden"
                alt="Logo of this service"
              />
            </Link>
          <div className="ml-10 z-10 hidden md:block">
            <SearchBar />
          </div>
        </div>
        {!user ? (
          <>
            <div className="items-center flex">
              <div className="hidden md:flex">
                <Link href="/signup" className="text-sm font-semibold leading-6 text-gray-900 px-4">
                  会員登録
                </Link>
                <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 px-4">
                  ログイン
                </Link>
              </div>
              <div className='md:hidden text-gray-900 text-xs flex flex-col justify-center items-center'>
                <UserIcon className='w-5'/>
                <Link href="/login">
                  ログイン
                </Link>
              </div>
            </div>

          </>
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