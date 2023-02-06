import React from "react"
import Svg, { Path } from "react-native-svg"
import { BaseSVG } from "../../types"

export default function MagnifyingGlass({ width, height, color }: BaseSVG) {
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
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </Svg>
  );
}
