import React, { ReactNode } from "react";
import Sidebar from "@/app/components/Sidebar/page"
function Main ({ children }: {
  children: ReactNode
}) {
  return (
    <div className="min-h-[100vh] flex w-full">
        <Sidebar />
        <div className="min-h-screen bg-slate-100 w-full">
          {children}
        </div>
    </div>
  )};

export default Main;