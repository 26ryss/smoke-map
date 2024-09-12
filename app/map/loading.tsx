import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className="flex h-[480px] justify-center items-center">
      <Spinner />
    </div>
  )
}