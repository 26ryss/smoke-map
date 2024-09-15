export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div>
      <div className="px-4 py-4 md:px-0 md:w-[1000px] md:mx-auto md:py-8">
        {children}
      </div>
    </div>
  )
}