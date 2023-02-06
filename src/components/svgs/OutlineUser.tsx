import React from "react"
import Svg, { Path } from "react-native-svg"
import { BaseSVG } from "../../types"

export default function OutlineUser({ width, height, color }: BaseSVG) {
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </Svg>
  );
}
