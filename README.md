# Google Font Picker Component for shadcn/ui

A beautiful and functional Google Font picker component built with shadcn/ui. This component allows users to search, filter, and preview Google Fonts directly in their application with optimized performance using virtualized rendering.

## Features

- 🔍 Search fonts by name
- 🗂️ Filter fonts by category (serif, sans-serif, display, handwriting, monospace)
- 👀 Live font preview with smooth loading
- 📱 Responsive design
- ♿ Accessible UI components
- 🎨 Customizable styling
- ⚡ Virtualized list rendering for optimal performance
- 🎯 Configurable dimensions and appearance

## Prerequisites

Before using this component, make sure you have:

1. A Next.js project with shadcn/ui set up
2. A Google Fonts API key (get one from [Google Cloud Console](https://console.cloud.google.com/))

## Installation

1. Add the required dependencies:

```bash
npm install lucide-react react-window
```

2. Install the required shadcn/ui components:

```bash
npx shadcn-ui@latest add button command dropdown-menu popover
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

2. Use the FontPicker component:

```tsx
export default function MyComponent() {
  const [selectedFont, setSelectedFont] = useState<string | undefined>();

  return (
    <FontPicker
      value={selectedFont}
      onChange={setSelectedFont}
      width="300px"
      height="400px"
      showFilters={true}
      className="my-custom-class"
    />
  );
}
```

## Component API

### FontPicker Props

| Prop          | Type                     | Default | Description                                      |
| ------------- | ------------------------ | ------- | ------------------------------------------------ |
| `value`       | `string`                 | -       | The currently selected font family               |
| `onChange`    | `(font: string) => void` | -       | Callback function called when a font is selected |
| `width`       | `string \| number`       | "300px" | Width of the picker component                    |
| `height`      | `string \| number`       | "300px" | Height of the picker component                   |
| `className`   | `string`                 | -       | Additional CSS classes for customization         |
| `showFilters` | `boolean`                | true    | Whether to show the category filter              |

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
