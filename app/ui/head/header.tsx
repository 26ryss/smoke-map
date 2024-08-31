import Image from 'next/image';
import SearchBar from '@/app/ui/head/search-bar';
import Link from 'next/link';

export default function Header() {

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
        <div className="flex items-center">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 px-4">
              会員登録
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 px-4">
              ログイン
          </Link>
        </div>
      </nav>
    </header>
  );
}