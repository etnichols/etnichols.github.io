// @ts-check

/**
 * Color theme configuration for the blog.
 *
 * Change ACTIVE_THEME to switch between the 5 color schemes.
 * Each theme defines a `primary` (blue family) and `secondary` (red family)
 * palette with full Tailwind-compatible shade ranges (50–950).
 *
 * Usage in tailwind.config.js:
 *   const { activeTheme } = require('./theme-colors')
 *   // then spread activeTheme into theme.extend.colors
 *
 * Available themes:
 *   'midnight'     – Deep navy + blood red. Dark and dramatic.
 *   'cobalt'       – Vivid cobalt blue + scarlet. Bold and modern.
 *   'steel'        – Cool steel blue + brick red. Understated and professional.
 *   'royal'        – Royal purple-blue + crimson. Rich and elegant.
 *   'abyssal'      – Near-black indigo + ember red. High contrast, hacker aesthetic.
 */

const ACTIVE_THEME = 'midnight'

const themes = {
  // ─── Theme 1: Midnight ─────────────────────────────────────────────────────
  // Deep navy blues with blood-red accents. Dark, moody, and atmospheric.
  midnight: {
    primary: {
      50:  '#eff4ff',
      100: '#dce8ff',
      200: '#b8d0ff',
      300: '#85aeff',
      400: '#5281ff',
      500: '#2952e3',  // vivid navy-blue — used for links in light mode
      600: '#1e3bcc',
      700: '#1a30a8',
      800: '#162787',
      900: '#0e1a5e',
      950: '#080e36',
    },
    secondary: {
      50:  '#fff1f1',
      100: '#ffe1e2',
      200: '#ffc7c9',
      300: '#ff9ea2',
      400: '#ff6368',
      500: '#e8192c',  // blood red — used for secondary accents
      600: '#c8101e',
      700: '#a80e1a',
      800: '#840b15',
      900: '#5c0910',
      950: '#340408',
    },
  },

  // ─── Theme 2: Cobalt ───────────────────────────────────────────────────────
  // Vivid cobalt blue + scarlet red. High energy, modern, and punchy.
  cobalt: {
    primary: {
      50:  '#eef3ff',
      100: '#dae4ff',
      200: '#bcceff',
      300: '#8eadff',
      400: '#5a81fd',
      500: '#0047cc',  // cobalt blue
      600: '#003eb8',
      700: '#003296',
      800: '#002776',
      900: '#001a54',
      950: '#000c2e',
    },
    secondary: {
      50:  '#fff2f0',
      100: '#ffe5e0',
      200: '#ffcfc6',
      300: '#ffab9d',
      400: '#ff7763',
      500: '#e83a20',  // scarlet
      600: '#cc2a12',
      700: '#aa220e',
      800: '#871c0c',
      900: '#5e140a',
      950: '#360904',
    },
  },

  // ─── Theme 3: Steel ────────────────────────────────────────────────────────
  // Cool steel blue + brick red. Understated, professional, and clean.
  steel: {
    primary: {
      50:  '#f0f7ff',
      100: '#e0eefe',
      200: '#badcfe',
      300: '#7ec0fd',
      400: '#3a9efa',
      500: '#1a7acc',  // steel blue
      600: '#1464ad',
      700: '#10508e',
      800: '#0d3d70',
      900: '#092b50',
      950: '#05182e',
    },
    secondary: {
      50:  '#fff5f0',
      100: '#ffebe0',
      200: '#ffd4be',
      300: '#ffb490',
      400: '#ff8454',
      500: '#cc3a0a',  // brick red
      600: '#b03208',
      700: '#8f2906',
      800: '#6e1f04',
      900: '#4d1503',
      950: '#2b0b01',
    },
  },

  // ─── Theme 4: Royal ────────────────────────────────────────────────────────
  // Royal purple-blue + crimson. Rich, elegant, and commanding.
  royal: {
    primary: {
      50:  '#eef1ff',
      100: '#dde3ff',
      200: '#c3cdff',
      300: '#9daeff',
      400: '#7080fe',
      500: '#4154f5',  // royal blue-violet
      600: '#3442e0',
      700: '#2932bc',
      800: '#212798',
      900: '#181c72',
      950: '#0d1046',
    },
    secondary: {
      50:  '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#dc143c',  // crimson
      600: '#be1034',
      700: '#9f0d2d',
      800: '#800b26',
      900: '#57071a',
      950: '#30030e',
    },
  },

  // ─── Theme 5: Abyssal ──────────────────────────────────────────────────────
  // Near-black indigo + ember red. Maximum contrast, hacker / terminal aesthetic.
  abyssal: {
    primary: {
      50:  '#f0efff',
      100: '#e4e2ff',
      200: '#ccc9ff',
      300: '#a9a4ff',
      400: '#7e75ff',
      500: '#5040f5',  // vivid indigo — bright enough for links
      600: '#3f30e0',
      700: '#3224bc',
      800: '#281c98',
      900: '#1a1266',
      950: '#08082e',
    },
    secondary: {
      50:  '#fff8f0',
      100: '#fff0dc',
      200: '#ffddb0',
      300: '#ffc070',
      400: '#ff9430',
      500: '#e05500',  // ember — deep orange-red
      600: '#c24600',
      700: '#9e3800',
      800: '#7a2c00',
      900: '#551e00',
      950: '#2e1000',
    },
  },
}

const activeTheme = themes[ACTIVE_THEME]

module.exports = {
  ACTIVE_THEME,
  themes,
  activeTheme,
}
