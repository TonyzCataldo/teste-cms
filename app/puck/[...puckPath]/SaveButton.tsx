import { useGetPuck } from "@measured/puck";
import axios from "axios";

export default function SaveButton({ path }: { path: string }) {
  const getPuck = useGetPuck();

  const publish = async () => {
    const { appState } = getPuck();
    await axios.post("/puck/api", { data: appState.data, path });
  };

  return (
    <button
      className="px-6 py-3 rounded-md text-lg font-mono cursor-pointer transition-colors duration-300 delay-50 bg-green-600/40 hover:bg-green-500"
      onClick={publish}
    >
      Salvar
    </button>
  );
}
