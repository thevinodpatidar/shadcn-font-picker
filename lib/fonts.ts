export interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: Record<string, string>;
  category: string;
  kind: string;
}

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY;
const API_URL = "https://www.googleapis.com/webfonts/v1/webfonts";

// Cache for loaded font stylesheets
const loadedFonts = new Set<string>();

// Cache for the Google Fonts API response
let fontsCache: GoogleFont[] | null = null;
let fontsCacheTimestamp: number | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchGoogleFonts(): Promise<GoogleFont[]> {
  // Check if we have a valid cache
  if (
    fontsCache &&
    fontsCacheTimestamp &&
    Date.now() - fontsCacheTimestamp < CACHE_DURATION
  ) {
    return fontsCache;
  }

  if (!API_KEY) {
    throw new Error("Google Fonts API key is not configured");
  }

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&sort=popularity`);
    if (!response.ok) {
      throw new Error("Failed to fetch Google Fonts");
    }
    const data = await response.json();
    fontsCache = data.items;
    fontsCacheTimestamp = Date.now();
    return data.items;
  } catch (error) {
    // If fetch fails and we have a cache, return it even if expired
    if (fontsCache) {
      return fontsCache;
    }
    console.error("Error fetching Google Fonts:", error);
    throw error;
  }
}

export function getFontUrl(font: GoogleFont, variant = "regular"): string {
  const fontFamily = font.family.replace(/\s+/g, "+");
  const fontVariant = variant === "regular" ? "400" : variant;
  return `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${fontVariant}&display=swap`;
}

export async function loadFont(
  fontFamily: string,
  variant = "regular",
): Promise<void> {
  if (loadedFonts.has(fontFamily)) {
    return;
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.href = getFontUrl({ family: fontFamily } as GoogleFont, variant);
    link.rel = "stylesheet";

    link.onload = () => {
      loadedFonts.add(fontFamily);
      resolve();
    };

    link.onerror = () => {
      reject(new Error(`Failed to load font: ${fontFamily}`));
    };

    document.head.appendChild(link);
  });
}

export interface FontPickerProps {
  onFontSelect?: (font: GoogleFont) => void;
  value?: string;
}

export const FONT_CATEGORIES = [
  "serif",
  "sans-serif",
  "display",
  "handwriting",
  "monospace",
] as const;

export type FontCategory = (typeof FONT_CATEGORIES)[number];

export const FONT_WEIGHTS = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

export type FontWeight = (typeof FONT_WEIGHTS)[number];
