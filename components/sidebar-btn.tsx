import { ReactNode } from "react";

interface SidebarButtonProps {
    children: ReactNode
    onClick?: () => void
}

export default function SidebarButton({children, onClick}: SidebarButtonProps) {
  return (
    <>
      <button className="bg-white/30 rounded-xl cursor-pointer p-3 mb-5">{children}</button>
    </>
  );
}
