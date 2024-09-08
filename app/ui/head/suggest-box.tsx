import SuggestBoxClient from "./suggest-box-client";

export default function SuggestBox({
  query,
} : {
  query: string;
}) {
  return (
    <>
      <SuggestBoxClient areas={['原宿', '渋谷', '新宿', '池袋']} />
    </>
  )
}