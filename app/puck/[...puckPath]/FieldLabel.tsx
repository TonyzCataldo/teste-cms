export default function FieldLabel({
  label,
  children,
  radio,
}: {
  label: string;
  children: React.ReactNode;
  radio?: boolean;
}) {
  if (radio) {
    return (
      <div className="flex flex-col mb-1.5">
        <div className="text-lg font-mono pl-0.5  text-green-500">{label}</div>
        {children}
      </div>
    );
  } else {
    return (
      <label className="flex flex-col mb-1.5">
        <div className="text-lg font-mono pl-0.5  text-green-500">{label}</div>
        {children}
      </label>
    );
  }
}
