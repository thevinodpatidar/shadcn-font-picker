"use client";

import { Button } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm leading-loose text-muted-foreground">
            Built with{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              shadcn/ui
            </a>{" "}
            and{" "}
            <a
              href="https://fonts.google.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              Google Fonts
            </a>
            .
          </p>
          <p className="text-sm leading-loose text-muted-foreground">
            Inspired by{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              shadcn/ui
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 md:justify-end">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/your-repo/shadcn-font-picker"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
