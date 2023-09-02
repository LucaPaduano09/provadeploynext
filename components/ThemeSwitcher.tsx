"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = [
    { key: "1", color: "dark" },
    { key: "2", color: "light" },
  ];

  return (
    <div className="flex justify-center mt-[7rem] lg:mt-[0px] md:mt-[0px] sm:mt-[0px]">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="h-[30px]">
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={(item as any).key}
              color={(item as any) === "delete" ? "danger" : "default"}
              className={(item as any) === "delete" ? "text-danger" : ""}
            >
              <button
                className="w-full"
                onClick={() => setTheme((item as any).color)}
              >
                {" "}
                {(item as any).color}
              </button>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
