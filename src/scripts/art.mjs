// Random ASCII art for the home terminal.
// `pickArt()` selects one at load time. This module is the ONLY client JS on
// the site besides the clock (both well under the 2kb budget together).
//
// Pieces are hand-drawn on a strict monospace grid; the frame() helper
// computes row widths from content so borders always line up exactly.

/** Wrap plaintext rows in a single-line box with an optional left title. */
function frame(title, rows) {
  const inner = Math.max(...rows.map((r) => r.length), title.length + 6);
  const w = inner + 4;
  const top = title
    ? `╭─ ${title.toUpperCase()} ${'─'.repeat(w - 5 - title.length)}╮`
    : `╭${'─'.repeat(w - 2)}╮`;
  return [
    top,
    ...rows.map((r) => `│ ${r.padEnd(inner)} │`),
    `╰${'─'.repeat(w - 2)}╯`,
  ];
}

/* [1] rack — the home server that hosts this site */
const rack = frame('rack', [
  '[dev]    ▓▓▓▓▓▓ 40%',
  '[www]    ▓▓▓▓▓▓▓ 51%',
  '[db ]    ▓▓▓     18%',
  '· · · · · · · · · ·',
  '[ok] 3 up, 0 down',
]).join('\n');

/* [2] keys — keyboard, 4 columns */
const keys = [
  '┌───┬───┬───┬───┐',
  '│ q │ w │ e │ r │',
  '├───┼───┼───┼───┤',
  '│ a │ s │ d │ f │',
  '└───┴───┴───┴───┘',
].join('\n');

/* [3] waves — horizon, abstract */
const waves = [
  '      ░╱╲░╱╲░      ',
  '    ░╱╲░╱╲░╱╲░╱    ',
  '  ╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱  ',
  ' ╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲ ',
  '▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅',
  '▂▄▆█▆▄▂▁  ·  ▂▄▆█▆▄',
].join('\n');

/* [4] moon — lunar phase strip */
const moon = [
  '   ☾ ☽ ○ ◐ ●    ',
  '   w a x i n g  ',
  '   ·  ~  ·  ~   ',
].join('\n');

/* [5] tty0 — a tiny CRT terminal */
const tty = frame('tty0', [
  ' > neofetch --redraw',
  ' · glass: on',
  ' · mood: dark',
]).join('\n');

export const ASCII_ART = [
  { name: 'rack', art: rack },
  { name: 'keys', art: keys },
  { name: 'waves', art: waves },
  { name: 'moon', art: moon },
  { name: 'tty0', art: tty },
];
