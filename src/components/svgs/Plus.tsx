import React from "react"
import Svg, { Path } from "react-native-svg"
import { BaseSVG } from "../../types"

export default function Plus({ width, height, color }: BaseSVG) {
  return (
    <Svg
      fill="none"
      stroke={color || "#000"}
      strokeWidth={1.5}
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </Svg>
  );
}
