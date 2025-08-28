import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className="flex w-full px-4 py-2.5 justify-center items-center md:px-6">
      <div className="flex justify-between items-center w-full max-w-[1440px]">
        <h2 className=" rounded-md font-mono">
          <span className="text-green-500">LOGO</span> pages
        </h2>
        <div>
          <Link
            href={"/"}
            className="p-4 transition-colors duration-300 delay-50  hover:bg-gray-400/20 dark:hover:bg-gray-700/30 rounded-md font-mono"
          >
            Dashboard
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
