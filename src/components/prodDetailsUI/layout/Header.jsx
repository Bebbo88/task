"use client";
import NavLinks from "./NavLinks";
import ActionIcons from "./ActionIcons";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white  py-4 px-6 lg:px-24 flex justify-between items-center sticky top-0 z-50 relative">
      <div className="flex items-center gap-8 lg:gap-15">
        <Image src="/icons/logo.svg" alt="Logo" width={65} height={51} />
        <NavLinks />
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex">
          <ActionIcons />
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <Image
              src="/icons/mingcute_menu-fill.svg"
              alt="Menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t md:hidden">
          <NavLinks mobile />

          <div className="h-px bg-gray-200 mx-6 my-4" />

          <div className="px-6 pb-4">
            <ActionIcons mobile />
          </div>
        </div>
      )}
    </header>
  );
}
