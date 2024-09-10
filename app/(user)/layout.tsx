import { Suspense } from 'react';
import Header from "@/app/ui/head/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>
      <div>
        {children}
      </div>
    </div>
  );
}
