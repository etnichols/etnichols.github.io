import { style } from "glamor"
import { colors } from "./colors"

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
