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
      <Header />
      <div className=" max-w-[1440px] w-full  ">{children}</div>
    </div>
  );
}
