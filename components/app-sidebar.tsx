"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BadgePlus, Clock, Settings } from "lucide-react";
import Link from "next/link";
import SidebarButton from "./sidebar-btn";
import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="mx-2">
        <Link
          href="/"
          className="bg-primary flex flex-row justify-center items-center cursor-pointer rounded-xl mt-3 text-white"
        >
          <button onClick={() => toggleSidebar()} className="flex flex-row gap-3 py-7 px-10 cursor-pointer">
            <BadgePlus />
            <span>New Project</span>
          </button>
        </Link>
      </SidebarHeader>
      <SidebarContent className="mx-2 my-10">
        <SidebarGroup>
          <Link href={"/latest"}>
            <SidebarButton>
              <Clock />
              <span>Latest Configurations</span>
            </SidebarButton>
          </Link>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="mx-2">
        <Link href={"/settings"}>
          <SidebarButton>
            <Settings />
            <span>Settings</span>
          </SidebarButton>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
