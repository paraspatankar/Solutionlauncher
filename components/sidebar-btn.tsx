"use client"

import { ReactNode } from "react";
import { useSidebar } from "./ui/sidebar";

interface SidebarButtonProps {
    children: ReactNode
    onClick?: () => void
}

export default function SidebarButton({children, onClick}: SidebarButtonProps) {
  function handleClick() {
    toggleSidebar()
    if(onClick) {
      onClick()
    }
  }
  const { toggleSidebar } = useSidebar()
  return (
    <>
      <button onClick={handleClick} className="bg-foreground/30 text-foreground rounded-xl cursor-pointer p-3 mb-5 flex flex-row gap-3 w-full justify-center">{children}</button>
    </>
  );
}
