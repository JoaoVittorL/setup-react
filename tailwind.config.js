/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        white: { "50": "#FFFFFF", "100": "#FFFFFF", "200": "#FFFFFF", "300": "#FFFFFF", "400": "#FFFFFF", "500": "#FFFFFF", "600": "#CCCCCC", "700": "#999999", "800": "#666666", "900": "#333333", "950": "#1A1A1A" },
        black: { "50": "#E6E6E6", "100": "#CCCCCC", "200": "#999999", "300": "#666666", "400": "#333333", "500": "#000000", "600": "#000000", "700": "#000000", "800": "#000000", "900": "#000000", "950": "#000000" },
        gray: { "50": "#E8E8E8", "100": "#D4D4D4", "200": "#A6A6A6", "300": "#7A7A7A", "400": "#4F4F4F", "500": "#232323", "600": "#1C1C1C", "700": "#141414", "800": "#0D0D0D", "900": "#080808", "950": "#030303" },
        red: { "50": "#FDDEDE", "100": "#FABCBC", "200": "#F67F7F", "300": "#F13C3C", "400": "#DB1010", "500": "#990B0B", "600": "#7C0909", "700": "#5A0606", "800": "#3E0404", "900": "#1D0202", "950": "#0E0101" },
        yellow: { "50": "#FFF9E5", "100": "#FFF2CC", "200": "#FFE79E", "300": "#FFDA6B", "400": "#FFCD38", "500": "#FFC107", "600": "#D19D00", "700": "#9E7700", "800": "#6B5000", "900": "#332600", "950": "#191300" },
        "bright-orange": { "50": "#FFEBE5", "100": "#FFD6CC", "200": "#FFB19E", "300": "#FF896B", "400": "#FF643D", "500": "#FF3D0A", "600": "#D62B00", "700": "#9E2000", "800": "#6B1500", "900": "#330A00", "950": "#190500" },
        "soft_orange": { "50": "#FFEFEB", "100": "#FFE4DB", "200": "#FFC4B3", "300": "#FFA98F", "400": "#FF8A66", "500": "#FF7043", "600": "#FF3C00", "700": "#C22D00", "800": "#801E00", "900": "#420F00", "950": "#1F0700" },
        green: { "50": "#E6F9EB", "100": "#CEF3D6", "200": "#9CE7AE", "300": "#6BDC85", "400": "#39D05D", "500": "#28A745", "600": "#1F8437", "700": "#186329", "800": "#10421B", "900": "#08210E", "950": "#041007" },
        aqua: { "50": "#DBFFFB", "100": "#B8FFF8", "200": "#70FFF1", "300": "#29FFEA", "400": "#00E0CA", "500": "#009688", "600": "#007A6E", "700": "#005C53", "800": "#003D37", "900": "#001F1C", "950": "#000F0E" },
        blue: { "50": "#E0EFFF", "100": "#BDDDFF", "200": "#7ABAFF", "300": "#3898FF", "400": "#0076F5", "500": "#0056B3", "600": "#00458F", "700": "#00346B", "800": "#002347", "900": "#001124", "950": "#000A14" },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
