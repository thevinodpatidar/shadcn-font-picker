"use client";

import type { GoogleFont } from "@/lib/fonts";
import { Check, ChevronsUpDown, Filter } from "lucide-react";
import * as React from "react";
import { FixedSizeList as List } from "react-window";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetchGoogleFonts, loadFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

function FontListItem({
  font,
  isSelected,
  onSelect,
}: {
  font: GoogleFont;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const [isFontLoaded, setIsFontLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!isFontLoaded) {
      loadFont(font.family)
        .then(() => setIsFontLoaded(true))
        .catch((error) => console.error("Failed to load font:", error));
    }
  }, [isFontLoaded, font.family]);

  return (
    <CommandItem
      value={font.family}
      onSelect={onSelect}
      className="data-[selected=true]:bg-accent flex cursor-pointer items-center gap-2 p-2"
      data-selected={isSelected}
    >
      <Check
        className={cn(
          "h-3 w-3 shrink-0",
          isSelected ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium">{font.family}</span>
        <span
          className={cn(
            "text-muted-foreground text-xs transition-opacity duration-300",
            isFontLoaded ? "opacity-100" : "opacity-0",
          )}
          style={{
            fontFamily: isFontLoaded ? font.family : "system-ui",
          }}
        >
          The quick brown fox
        </span>
      </div>
    </CommandItem>
  );
}

interface FontPickerProps {
  onChange?: (font: GoogleFont["family"]) => void;
  value?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  showFilters?: boolean;
}

export function FontPicker({
  onChange,
  value,
  width = "300px",
  height = "300px",
  className,
  showFilters = true,
}: FontPickerProps) {
  const [selectedFont, setSelectedFont] = React.useState<GoogleFont | null>(
    null,
  );
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [fonts, setFonts] = React.useState<GoogleFont[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const listRef = React.useRef<List>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const loadFonts = async () => {
      try {
        setIsLoading(true);
        const fetchedFonts = await fetchGoogleFonts();
        setFonts(fetchedFonts);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load fonts"),
        );
        console.error("Error loading fonts:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadFonts();
  }, []);

  const categories = React.useMemo(() => {
    const uniqueCategories = new Set(fonts.map((font) => font.category));
    return Array.from(uniqueCategories).sort();
  }, [fonts]);

  const filteredFonts = React.useMemo(() => {
    return fonts.filter((font: GoogleFont) => {
      const matchesSearch = font.family
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        !showFilters ||
        selectedCategory === "all" ||
        font.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [fonts, search, selectedCategory, showFilters]);

  const handleSelectFont = React.useCallback(
    (font: GoogleFont) => {
      setSelectedFont(font);
      onChange?.(font.family);
      setIsOpen(false);
    },
    [onChange],
  );

  const handleOpenChange = React.useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  const Row = React.useCallback(
    ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const font = filteredFonts[index];
      return (
        <div style={style}>
          <FontListItem
            font={font}
            isSelected={selectedFont?.family === font.family}
            onSelect={() => handleSelectFont(font)}
          />
        </div>
      );
    },
    [filteredFonts, selectedFont, handleSelectFont],
  );

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Select font"
          className={cn("group relative justify-between", className)}
          style={{ width }}
        >
          <span className="truncate">
            {value
              ? filteredFonts.find((font) => font.family === value)?.family
              : "Select font..."}
          </span>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width }} align="start">
        <Command>
          <CommandInput
            placeholder="Search fonts..."
            value={search}
            onValueChange={setSearch}
            className="border-none focus:ring-0"
          />
          <div className="flex items-center justify-between gap-2 border-b px-3 py-1">
            {showFilters && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-accent flex h-8 items-center gap-2 px-2"
                  >
                    <Filter className="text-muted-foreground h-4 w-4" />
                    <span className="text-sm capitalize">
                      {selectedCategory === "all"
                        ? "All Categories"
                        : selectedCategory}
                    </span>
                    <ChevronsUpDown className="ml-2 h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuRadioGroup
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <DropdownMenuRadioItem value="all">
                      All Categories
                    </DropdownMenuRadioItem>
                    {categories.map((category) => (
                      <DropdownMenuRadioItem
                        key={category}
                        value={category}
                        className="capitalize"
                      >
                        {category}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <span className="text-muted-foreground text-xs">
              {filteredFonts.length} fonts
            </span>
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center p-4">
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-gray-900" />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center p-4 text-sm text-red-500">
              Failed to load fonts. Please try again later.
            </div>
          ) : (
            <>
              <CommandEmpty>No fonts found.</CommandEmpty>
              <CommandGroup>
                <div className={`h-[${height}px]`}>
                  <List
                    ref={listRef}
                    height={400}
                    itemCount={filteredFonts.length}
                    itemSize={55}
                    width="100%"
                  >
                    {Row}
                  </List>
                </div>
              </CommandGroup>
            </>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}