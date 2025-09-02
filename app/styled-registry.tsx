"use client";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import React from "react";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheet] = React.useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    (sheet as any).instance.clearTag();
    return <>{styles}</>;
  });
  if (typeof window !== "undefined") {
    // 🟢 Client: NÃO envolva com `sheet`
    // (deixa a injeção normal e permite um StyleSheetManager target abaixo assumir)
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
