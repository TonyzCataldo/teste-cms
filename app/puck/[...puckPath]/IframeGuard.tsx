"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function IframeGuard({
  doc,
  children,
}: {
  doc?: Document;
  children: React.ReactNode;
}) {
  const [readyDoc, setReadyDoc] = useState<Document | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    if (!doc) return;

    if (doc.readyState !== "loading" && doc.head) {
      setReadyDoc(doc);
      return;
    }

    const onChange = () => {
      if (doc.readyState !== "loading" && doc.head) {
        setReadyDoc(doc);
      }
    };
    doc.addEventListener("readystatechange", onChange);

    return () => doc.removeEventListener("readystatechange", onChange);
  }, [doc, pathName]);

  if (!readyDoc?.head) {
    return <div></div>;
  } else {
    return (
      <StyleSheetManager target={readyDoc.head}>{children}</StyleSheetManager>
    );
  }
}
