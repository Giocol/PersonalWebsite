import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import unocss from '@unocss/astro';
import presetIcons from '@unocss/preset-icons';
import logos from '@iconify-json/logos/icons.json';
import uil from '@iconify-json/uil/icons.json';
import presetWind from '@unocss/preset-wind';
import presetTypography from '@unocss/preset-typography';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
  'orange',
  'teal',
  'cyan',
  'lime',
  'emerald',
  'fuchsia',
  'violet',
  'rose',
  'sky',
  'amber',
];

const getSafeList = () => {
  const list = [];
  colors.forEach((color) => {
    list.push(`hover:bg-${color}`);
    list.push(`bg-${color}`);
    list.push(`prose-${color}`);
  });
  return list;
};

export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://brutal.elian.codes/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3001/',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: ['cpp'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  integrations: [
    sitemap(),
    unocss({
      presets: [
        presetWind(),
        presetIcons({
          collections: {
            logos,
            uil,
          },
        }),
        presetTypography(),
      ],
      safelist: getSafeList(),
    }),
  ],
});
