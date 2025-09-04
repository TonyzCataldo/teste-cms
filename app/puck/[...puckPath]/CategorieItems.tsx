import { Drawer } from "@measured/puck";
import PuckComponent from "./PuckComponent";

export default function CategorieItems({
  categorieUp,
  names,
}: {
  categorieUp: boolean;
  names: string[];
}) {
  if (!categorieUp) return null;

  return (
    <div className="flex gap-3 px-3">
      {names.map((n) => (
        <Drawer.Item key={n} name={n}>
          {({ name: itemName /*, children */ }) => (
            <PuckComponent name={itemName} />
          )}
        </Drawer.Item>
      ))}
    </div>
  );
}
