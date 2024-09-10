export default function Title({ 
  text,
 }: { 
  text: string;
 }) {
  return (
    <h1 className="text-3xl font-bold leading-6 text-gray-900">{text}</h1>
  );
}