import Link from "next/link";
import { allSnippets, Snippet as SnippetType } from "contentlayer/generated";



import CodeBlock from "@/components/code-block";
import { Snippet } from "@/components/snippet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const snippets: SnippetType[] = allSnippets.sort((a, b) => a.order - b.order);

export default function Setup() {
  return (
    <section id="setup" className="w-full py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Setup
      </h2>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install Shadcn via CLI
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Run the{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            shadcn
          </code>{" "}
          init command to setup your project:
        </p>
        <CodeBlock value="npx shadcn@latest init" className="mt-2" />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary Shadcn components:
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Run the{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            shadcn
          </code>{" "}
          add command to add the necessary shadcn components to your project:
        </p>
        <div data-rehype-pretty-code-fragment="">
          <CodeBlock
            className="mt-2"
            value={`npx shadcn@latest add button command dropdown-menu popover`}
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary React packages:
        </h3>
        <CodeBlock value={"yarn add react-window"} className="mt-2" />
        <CodeBlock value={"yarn add -D @types/react-window"} className="mt-2" />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Generate a Google Fonts API key:
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Go to the{" "}
          <Link
            className="text-blue-500"
            href="https://console.cloud.google.com/apis/api/webfonts.googleapis.com/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Fonts API console
          </Link>
        </p>
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Update the{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            .env
          </code>{" "}
          file:
        </h3>
        <CodeBlock
          value={`NEXT_PUBLIC_GOOGLE_FONTS_API_KEY="your-api-key-here"`}
          className="mt-2"
        />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 pb-2 text-lg font-semibold tracking-tight">
          To use the font picker component:
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Import the font picker component:
        </p>
        <CodeBlock
          value={`import { FontPicker } from "@/components/ui/font-picker";`}
          className="mt-2"
        />
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Use the font picker component:
        </p>
        <CodeBlock
          value={`<FontPicker onChange={(font) => setFont(font)} value={font} />`}
          className="mt-2"
        />
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Copy the code from the snippet below and paste it in your component
          file.
        </p>
        <div className="mt-10 flex flex-col">
          <h3 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Snippets
          </h3>
          <Accordion type="single" collapsible defaultValue={snippets[0].file}>
            {snippets.map((snippet) => (
              <AccordionItem key={snippet.slug} value={snippet.file}>
                <AccordionTrigger id={snippet.file}>
                  <code>
                    {snippet.file}{" "}
                    <span className="text-muted-foreground text-right text-xs">
                      ({snippet.filePath})
                    </span>
                  </code>
                </AccordionTrigger>
                <AccordionContent>
                  <Snippet snippet={snippet} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}