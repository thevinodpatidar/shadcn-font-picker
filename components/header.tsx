"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground">
              <span className="text-xs font-bold text-background">F</span>
            </div>
            <span>Font Picker</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-2">
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
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/your-repo/shadcn-font-picker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
