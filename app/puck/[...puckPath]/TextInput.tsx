export default function TextInput({ value, name, onChange }) {
  return (
    <input
      className="bg-white  w-full placeholder:text-[var(--txt)] rounded-md border font-sans text-[var(--txt)] focus:border-green-500 border-gray-700 outline-0  p-3"
      type="text"
      value={value ?? ""}
      placeholder={name}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
