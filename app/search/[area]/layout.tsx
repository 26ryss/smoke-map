export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="md:w-[1000px] md:mx-auto">
      {children}
    </div>
  )
}