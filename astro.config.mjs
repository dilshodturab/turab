// @ts-check
import { defineConfig } from 'astro/config';

// Package versions, referenced in README setup instructions.
export const ASTRO_VERSION = '^7.4.0';

export default defineConfig({
  // Pure static output — deploy ./dist to Cloudflare Pages / Vercel / Netlify.
  output: 'static',

  // Built-in Markdown pipeline (remark/rehype) + Shiki, all at build time.
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // Treesitter-like colors, resolved entirely at build time (no client JS).
      theme: 'catppuccin-mocha',
      // No background from Shiki; the /\* glass terminal \*/ stylesheet owns it.
      wrap: false,
    },
  },

  devToolbar: { enabled: false },
});
