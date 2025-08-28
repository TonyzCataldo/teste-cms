import { Data } from "@measured/puck";
import fs from "fs";

// Replace with call to your database
export const getPage = (path: string) => {
  const allData: Record<string, Data> | null = fs.existsSync("database.json")
    ? JSON.parse(fs.readFileSync("database.json", "utf-8"))
    : null;

  return allData ? allData[path] : null;
};

export const getPagesInfo = () => {
  const allData: Record<string, Data> | null = fs.existsSync("database.json")
    ? JSON.parse(fs.readFileSync("database.json", "utf-8"))
    : null;

  if (!allData) return { count: 0, names: [] };

  const slugs = Object.keys(allData).filter((k) => k.startsWith("/"));
  const names = slugs.map((s) => s.slice(1));

  return { count: slugs.length, names };
};

export function deletePage(name: string) {
  if (!fs.existsSync("database.json")) return false;
  const data = JSON.parse(fs.readFileSync("database.json", "utf-8"));

  if (!data[name]) return false;

  delete data[name];

  fs.writeFileSync("database.json", JSON.stringify(data, null), "utf-8");
}
