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
      {/* <Header /> */}
      {/* <div className="w-full h-0.5 bg-[var(--gray)] mb-10"></div> */}

      <div className="  w-full ">{children}</div>
    </div>
  );
}
