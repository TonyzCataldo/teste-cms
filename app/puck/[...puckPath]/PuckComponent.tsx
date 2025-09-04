export default function PuckComponent({ name }: { name: string }) {
  return (
    <div className="border border-gray-700 px-7 rounded-sm bg-gray-100  hover:bg-[var(--gray)] hover:text-green-500 p-3 cursor-grab">
      {name}
    </div>
  );
}
