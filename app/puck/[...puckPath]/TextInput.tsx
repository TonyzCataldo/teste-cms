export default function TextInput({ value, name, onChange, type }) {
  return (
    <input
      className="bg-white  w-full placeholder:text-[var(--txt)] rounded-md border font-sans text-[var(--txt)] focus:border-green-500 border-gray-300 outline-0  p-3"
      type={type}
      value={value ?? ""}
      placeholder={name}
      onChange={(e) => onChange(e.currentTarget.value)}
      onWheel={(e) => e.currentTarget.blur()}
    />
  );
}
