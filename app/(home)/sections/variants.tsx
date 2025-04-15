import { FontPicker } from "@/components/ui/font-picker";
import { useState } from "react";

export default function Variants() {
  const [font, setFont] = useState("");

  return (
    <section id="variants" className="w-full py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Variants
      </h2>
      <div className="w-full">
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          The font picker component can be used as different variants.
        </p>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Default
          </h3>
          <div className="preview relative mt-2 flex min-h-[200px] w-full flex-col gap-4 items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FontPicker value={font} onChange={(font) => setFont(font)} />
            <span
              className="text-sm text-muted-foreground"
              style={{ fontFamily: font }}
            >
              This is a custom implementation of the Font Picker component.
            </span>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Custom width
          </h3>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FontPicker
              value={font}
              onChange={(font) => setFont(font)}
              width={200}
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Custom height
          </h3>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FontPicker
              value={font}
              onChange={(font) => setFont(font)}
              height={200}
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Without filters
          </h3>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <FontPicker
              value={font}
              onChange={(font) => setFont(font)}
              showFilters={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
