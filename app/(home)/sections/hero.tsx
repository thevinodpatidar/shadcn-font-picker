import CodeBlock from "@/components/code-block";
// import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontPicker } from "@/components/ui/font-picker";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { siteConfig } from "@/config/site";
import startuplistLogo from "@/public/startup-listing.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";


const FormSchema = z.object({
  font: z.string().min(1, {
    message: "Font name is required",
  }),
});

export default function Hero() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      font: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("You submitted the following values:", {
      description: (
        <pre className="bg-muted mt-2 rounded-md p-4 whitespace-pre-wrap">
          <code className="text-muted-foreground">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <section className="z-10 flex w-full flex-col items-center gap-5 text-center">
        <div className="outline-border hover:outline-border-primary relative mx-auto max-w-sm rounded-sm outline outline-offset-2 transition-all duration-300 hover:outline-2 md:max-w-2xl lg:max-w-4xl">
          <Link
            href="https://startuplist.ing?utm_source=shadcn-font-picker"
            target="_blank"
          >
            <Card className="w-full cursor-pointer rounded-md px-0 py-2 md:py-1.5">
              <CardContent className="flex flex-row items-center justify-between gap-4 px-4">
                <div className="mr-auto text-left leading-0 sm:text-sm">
                  <Image
                    src={startuplistLogo}
                    alt="Startup listing logo"
                    width={120}
                    height={24}
                    loader={({ src, width, quality }) =>
                      `${src}?w=${width}&q=${quality}`
                    }
                    priority
                    className="float-left flex flex-shrink-0 rounded-sm align-middle mix-blend-multiply mr-1.5 dark:mix-blend-normal dark:invert"
                  />
                  {/* <span className="font-bold">Startup Listing</span> */}
                  <span className="text-muted-foreground text-sm">
                    - Discover the best startups, products and projects.
                  </span>
                </div>
                <Button
                  size="icon"
                  variant="outline"
                  className="flex md:hidden"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hidden h-7 md:block"
                >
                  Explore more
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="z-10 flex w-full flex-col items-center gap-5 text-center">
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight">
            Shadcn Font Picker
          </h1>
          <p className="text-muted-foreground max-w-[450px]">
            An implementation of a Font Picker component for <b>React</b>, built
            on top of Shadcn UI&apos;s input component and Google Fonts API.
          </p>
          <div className="mt-1 flex gap-2">
            <Link
              href="#try"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} min-w-[150px] shadow-sm`}
            >
              Try it out
            </Link>
            <Link
              href={siteConfig.links.github}
              className={`${buttonVariants({
                variant: "secondary",
                size: "lg",
              })} shadow-sm`}
            >
              Github
            </Link>
          </div>
          <CodeBlock
            value="npx shadcn@latest add https://shadcn-font-picker.vercel.app/r/font-picker.json"
            className="mt-2 w-fit px-12 text-balance"
          />
        </div>

        <div id="try" className="w-full py-8">
          <div className="relative my-4 flex w-full flex-col space-y-2">
            <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[350px] w-full items-start justify-center rounded-md border p-10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-start space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="font"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start">
                        <FormLabel className="text-left">Font Name</FormLabel>
                        <FormControl className="w-full">
                          <FontPicker {...field} />
                        </FormControl>
                        <FormDescription className="text-left">
                          Enter a font name
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <pre>
                    <code className="text-foreground">
                      {JSON.stringify(form.watch("font"), null, 2)}
                    </code>
                  </pre>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}