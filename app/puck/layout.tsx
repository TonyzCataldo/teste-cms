import React from "react";
import Header from "../../components/Header/Header";
import "./style.css";

export default function PuckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="  w-full ">{children}</div>
    </div>
  );
}
