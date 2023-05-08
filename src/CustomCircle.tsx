import { FC } from 'react'
import { Circle } from 'react-native-svg'

import { DEFAULT } from './constants'

const { STROKE_WIDTH, SVG_CENTER, SVG_RADIUS, SVG_CIRCUMFERENCE } = DEFAULT

interface CustomCircleProps {
  id?: number | string
  color: string
  angle: number
  percent: number
  strokeWidth?: number
  radius?: number
}

export const CustomCircle: FC<CustomCircleProps> = ({
  id,
  color,
  percent,
  angle,
  strokeWidth,
  radius,
}) => {
  return (
    <Circle
      key={id}
      cy={SVG_CENTER}
      cx={SVG_CENTER}
      r={radius ?? SVG_RADIUS}
      stroke={color}
      fill="transparent"
      originX={SVG_CENTER}
      originY={SVG_CENTER}
      rotation={angle - 90}
      strokeWidth={strokeWidth ?? STROKE_WIDTH}
      strokeDasharray={Math.floor(SVG_CIRCUMFERENCE)}
      strokeDashoffset={Math.floor(SVG_CIRCUMFERENCE) * (1 - percent)}
    />
  )
}
