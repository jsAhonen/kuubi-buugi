import { Box } from "@chakra-ui/layout";
import React from "react";
import theme from "../../theme";

export default function Polygon({ children }) {
  if (typeof window === "undefined") {
    return null;
  }
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return (
    <Box p="absolute" zIndex={-1}>
      <svg
        style={{ position: "fixed", zIndex: -1 }}
        width={`${vw}`}
        height={`${vh}`}
      >
        <polygon
          points={`0,0 ${vw * 0.55},0 0,${vh * 0.35}`}
          style={{ fill: theme.colors.beige, stroke: theme.colors.beige }}
        />
        <polygon
          points={`${vw * 0.45},${vh} ${vw},${vh}   ${vw},${vh * 0.55}`}
          style={{ fill: theme.colors.pink, stroke: theme.colors.pink }}
        />
      </svg>
      {children}
    </Box>
  );
}
