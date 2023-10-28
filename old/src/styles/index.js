import { style } from "glamor"

const baseHsl = `291, 0%, 18%`

const colors = {
  black: `hsla(${baseHsl},1)`,
  text: `hsla(${baseHsl},0.95)`,
  light: `hsla(${baseHsl},0.4)`,
  calm: `hsla(${baseHsl},0.3)`,
  smoke: `hsla(${baseHsl},0.2)`,
  whiteSmoke: `hsla(${baseHsl},0.08)`,
  white: `#fff`,
  link: `#03a9f4`,
  linkHover: `#ff5252`,
}


const animations = {
  animationCurveFastOutSlowIn: `cubic-bezier(0.4, 0, 0.2, 1)`,
  animationCurveLinearOutSlowIn: `cubic-bezier(0, 0, 0.2, 1)`,
  animationCurveFastOutLinearIn: `cubic-bezier(0.4, 0, 1, 1)`,
  animationCurveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
  animationSpeedDefault: `250ms`,
  animationSpeedFast: `200ms`,
  animationSpeedSlow: `300ms`,
}

export default {
  animations: animations,
  colors: colors,
  container: style({
    maxWidth: `37rem`,
    margin: `0 auto`,
  }),
}
