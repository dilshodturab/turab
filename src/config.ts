// Site settings live here. This is the ONLY file to edit for personal info;
// every page imports from it, so a change here propagates everywhere.
export const SITE = {
  /** Shown in the terminal title bar and as user@host in the info panel. */
  user: 'turab',
  host: 'portfolio',
  /** Display name used in <title> and RSS. */
  title: 'turab - personal site',
  /** One-liner printed after user@host in the fastfetch-style panel. */
  tagline: 'Vim elitist, backend engineer, owner of this website.',
  /** Short paragraph under the dashed separator. */
  bio: 'I write about linux, vim, backend engineering and the web.',
  /** Contact line in the info panel footer. */
  email: 'dilshodturab@gmail.com',
  /** Canonical URL — set this to your real domain before going live (used for RSS/atom feeds). */
  url: 'https://example.com',
} as const;
