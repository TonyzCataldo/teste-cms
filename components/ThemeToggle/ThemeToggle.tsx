"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // evita flash/mismatch

  const current = theme === "system" ? systemTheme : theme;
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      onClick={() => setTheme(next!)}
      className="rounded-xl border px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
      aria-label="Alternar tema"
      title={`Mudar para ${next}`}
    >
      {current === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
