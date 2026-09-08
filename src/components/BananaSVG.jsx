import React from "react";

/**
 * Reusable SVG banana illustrations.
 * variant: "yellow" | "green" | "red"
 * These are placeholders drawn in the MAS Fruits theme colors.
 * Replace with real photography by dropping files into src/assets/images
 * and swapping <BananaSVG /> for <img src={...} /> where desired.
 */
export default function BananaSVG({ variant = "yellow", size = 200, className = "" }) {
  const palettes = {
    yellow: { skin: "#f4c430", shade: "#e0a900", tip: "#6b4423", leaf: "#3a7d2c" },
    green: { skin: "#7cb342", shade: "#5c8a2e", tip: "#4a3018", leaf: "#2e5c1f" },
    red: { skin: "#a13a2e", shade: "#7c2a20", tip: "#3a2010", leaf: "#3a7d2c" },
  };
  const p = palettes[variant] || palettes.yellow;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="98" fill="#ffffff" />
      <g transform="translate(100,105) rotate(-8)">
        {[-38, -13, 12, 37].map((x, i) => (
          <g key={i} transform={`translate(${x},0)`}>
            <path
              d="M0,-55 C22,-50 26,-10 14,28 C8,44 -8,44 -14,28 C-26,-10 -22,-50 0,-55 Z"
              fill={p.skin}
              stroke={p.shade}
              strokeWidth="2"
            />
            <path
              d="M0,-55 C10,-53 14,-40 12,-25"
              fill="none"
              stroke={p.shade}
              strokeWidth="1.5"
              opacity="0.6"
            />
            <ellipse cx="0" cy="34" rx="6" ry="6" fill={p.tip} />
          </g>
        ))}
        <path d="M-50,-56 C-40,-66 40,-66 50,-56" fill="none" stroke={p.leaf} strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
