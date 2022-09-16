import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"
import Typography from 'typography'
import gray from "gray-percentage"

// Fork of https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-st-annes
const typography = new Typography({
  title: "St. Evs",
  baseFontSize: "14px",
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  baseLineHeight: 1.5625,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Alegreya', "serif"],
  bodyFontFamily: ['Atkinson Hyperlegible', "sans-serif"],
  googleFonts: [
    {
      name: 'Alegreya',
      styles: ['400','700',],
    },
    {
      name: 'Noto Serif',
      styles: ['400', '700',],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: "#fb251b",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      color: options.bodyColor,
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      paddingLeft: rhythm(18 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(6 / 16)} solid`,
      borderColor: "#fcea0e",
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        borderLeft: `${rhythm(3 / 16)} solid`,
        borderColor: "#fcea0e",
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
