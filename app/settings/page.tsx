"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/theme-switcher-02";

export default function Settings() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="w-screen">
        <h1 className="text-primary flex justify-center w-full font-bold text-4xl">
          Settings
        </h1>
      </div>
      <div className="border-1 my-5 mx-8">
        <section>
          <h2 className="font-bold text-2xl">Color theme</h2>
          <ThemeSwitcher></ThemeSwitcher>
        </section>
      </div>
    </>
  );
}
