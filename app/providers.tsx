"use client";

import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <main className="flex min-h-screen flex-col items-center">
          <Header />
          {children}
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
