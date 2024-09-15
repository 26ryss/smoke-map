import Link from 'next/link';
import Form from '@/app/_components/organisms/projects/login-form';

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-6 w-[500px] md:overflow-y-auto md:p-10">
        <Form />
        <div className="flex justify-end px-4 md:hidden">
          <Link href="/signup" className="text-sm font-semibold text-blue-500">会員登録はこちら ＞</Link>
        </div>
      </div>
    </div>
    
  )
}