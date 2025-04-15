# Google Font Picker Component for shadcn/ui

A beautiful and functional Google Font picker component built with shadcn/ui. This component allows users to search, filter, and preview Google Fonts directly in their application.

## Features

- 🔍 Search fonts by name
- 🗂️ Filter fonts by category (serif, sans-serif, display, handwriting, monospace)
- ⚖️ Select font weights
- 👀 Live font preview
- 📱 Responsive design
- ♿ Accessible UI components
- 🎨 Customizable styling

## Prerequisites

Before using this component, make sure you have:

1. A Next.js project with shadcn/ui set up
2. A Google Fonts API key (get one from [Google Cloud Console](https://console.cloud.google.com/))

## Installation

1. Add the required dependencies:

```bash
npm install @tanstack/react-query lucide-react
```

2. Install the required shadcn/ui components:

```bash
npx shadcn-ui@latest add button command popover select skeleton scroll-area
```

3. Set up your environment variables by creating a `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_FONTS_API_KEY=your_google_fonts_api_key_here
```

## Usage

1. Import the FontPicker component:

```tsx
import { FontPicker } from "@/components/ui/font-picker";
```

2. Wrap your application with QueryClientProvider:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app content */}
    </QueryClientProvider>
  );
}
```

3. Use the FontPicker component:

```tsx
export default function MyComponent() {
  const [selectedFont, setSelectedFont] = useState<GoogleFont | null>(null);

  return (
    <FontPicker
      value={selectedFont?.family}
      onFontSelect={setSelectedFont}
    />
  );
}
```

## Component API

### FontPicker Props

| Prop           | Type                         | Description                                      |
| -------------- | ---------------------------- | ------------------------------------------------ |
| `value`        | `string`                     | The currently selected font family               |
| `onFontSelect` | `(font: GoogleFont) => void` | Callback function called when a font is selected |

### GoogleFont Type

```ts
interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  version: string;
  lastModified: string;
  files: Record<string, string>;
  category: string;
  kind: string;
  menu: string;
}
```

## License

MIT
