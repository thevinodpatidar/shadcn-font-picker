"use client";

import Hero from "@/app/(home)/sections/hero";
import Setup from "@/app/(home)/sections/setup";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";



import Variants from "./sections/variants";


export default function Home() {
  return (
    <>
      <div className="container mx-auto flex max-w-5xl justify-between px-4 pt-20">
        <ThemeToggle />
        <main className="flex min-h-screen w-full flex-col items-center justify-between scroll-smooth">
          <Hero />
          <Setup />
          <Variants />
        </main>
      </div>
      <footer className="border-t p-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            Built with ❤️ by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vinod Patidar
            </a>
            .
          </p>
          <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
            The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Github.
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}