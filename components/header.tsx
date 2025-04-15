"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Moon, Star, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";


export function Header() {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="bg-foreground flex h-6 w-6 items-center justify-center rounded-full">
              <span className="text-background text-xs font-bold">F</span>
            </div>
            <span className="text-sm font-bold">Font Picker</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#try-it-out">Demo</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#setup">Setup</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#variants">Variants</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" asChild>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="h-4 w-4" />
                <span>Star on Github</span>
              </Link>
            </Button>
            <Button variant="outline" size="sm" onClick={handleThemeToggle}>
              <Sun
                className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
                onClick={() => setTheme("light")}
              />
              <Moon
                className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                onClick={() => setTheme("dark")}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}