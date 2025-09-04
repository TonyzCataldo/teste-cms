type FieldLabelProps = {
  label: string;
  children: React.ReactNode;
};

export default function FieldLabel({ label, children }: FieldLabelProps) {
  return (
    <label className="flex flex-col mb-1.5">
      <div className="text-lg font-mono pl-0.5  text-green-500">{label}</div>
      {children}
    </label>
  );
}

export function FakeFieldLabel({ label, children }: FieldLabelProps) {
  return (
    <div className="flex flex-col mb-1.5">
      <div className="text-lg font-mono pl-0.5  text-green-500">{label}</div>
      {children}
    </div>
  );
}
