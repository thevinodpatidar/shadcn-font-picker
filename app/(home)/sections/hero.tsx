import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import { FontPicker } from "@/components/ui/font-picker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { siteConfig } from "@/config/site";

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
    <>
      <section className="z-10 flex w-full flex-col items-center gap-5 text-center">
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
    </>
  );
}
