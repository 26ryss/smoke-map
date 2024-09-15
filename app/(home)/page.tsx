import HomeTemplatePc from "../_components/templates/home/pc/home-template"
import HomeTemplateSp from "../_components/templates/home/sp/home-template"

export default function Page() {
  return (
    <>
      <div className="hidden md:block">
        <HomeTemplatePc />
      </div>
      <div className="md:hidden">
        <HomeTemplateSp />
      </div>
    </>
  )
}