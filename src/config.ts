// Site settings live here. This is the ONLY file to edit for personal info;
// every page imports from it, so a change here propagates everywhere.
export const SITE = {
  /** Shown in the terminal title bar and as user@host in the info panel. */
  user: 'avmado',
  host: 'portfolio',
  /** Display name used in <title> and RSS. */
  title: 'avmado — personal site',
  /** One-liner printed after user@host in the fastfetch-style panel. */
  tagline: 'builder of small tools and this website.',
  /** Short paragraph under the dashed separator. */
  bio: 'I write about Neovim, shell tooling and the web. Everything here is a plain markdown file in /posts — pushed to git, rendered at build time.',
  /** Contact line in the info panel footer. */
  email: 'hi@avmado.dev',
  /** Canonical URL — set this to your real domain before going live (used for RSS/atom feeds). */
  url: 'https://example.com',
} as const;
