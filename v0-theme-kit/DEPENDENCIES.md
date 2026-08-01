# Dependencies

Match these versions when possible for pixel-consistent output.

## package.json (core)

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^0.511.0",
    "next": "^15.3.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwind-merge": "^3.6.0",
    "tw-animate-css": "^1.4.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.8",
    "tailwindcss": "^4.1.8",
    "typescript": "^5.8.3"
  }
}
```

## postcss.config.mjs

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## Fonts (next/font/google)

- `Geist` → `--font-geist-sans`
- `Geist_Mono` → `--font-geist-mono`
- `Newsreader` → `--font-newsreader` (normal + italic)

## File placement

| Kit file | App destination |
|----------|-----------------|
| `globals.css` | `src/app/globals.css` |
| `layout.reference.tsx` | `src/app/layout.tsx` |
| `utils.ts` | `src/lib/utils.ts` |
| `section-label.tsx` | `src/components/section-label.tsx` |

## Optional (if app needs them)

- `@supabase/supabase-js` — forms/auth (portfolio contact API)
- `playwright` — screenshots only, not required for theme
