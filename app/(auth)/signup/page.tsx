import Form from '@/app/_components/organisms/projects/signup-form';

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-6 w-[500px] md:overflow-y-auto md:p-10">
        <Form />
      </div>
    </div>
  )
}