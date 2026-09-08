import React from "react";

/**
 * Flat, single-colour nav icons. Every icon uses fill="currentColor" so it
 * automatically follows the link's text colour — dark green by default,
 * white on the active / hovered pill — with no separate "active" variant
 * needed.
 */
const base = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
});

export function IconHome({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 2.8 2.5 10.6c-.5.4-.2 1.2.4 1.2H5v9.2c0 .55.45 1 1 1h4.2v-6.4h3.6V22H18c.55 0 1-.45 1-1v-9.2h2.1c.6 0 .9-.8.4-1.2L12 2.8Z" />
    </svg>
  );
}

export function IconLeaf({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M20.5 3.2c.4 5.6-1 9.9-3.6 12.9-2.2 2.6-5.2 4-8.7 4.4-.5.06-.95-.33-.9-.85.35-3.7 1.7-6.8 4.2-9.1 1.9-1.75 4.4-3 7.5-3.6.5-.1.95.28.9.8-.06.5-.15 1-.28 1.45 1.15-1.6 1.85-3.6 1.9-6.1.15-.06.7-.06.85 0 .1.02.15.06.19.07Z" />
      <path d="M17 8c-2.6 1-4.6 2.6-6 4.6-1.1 1.6-1.8 3.4-2.2 5.4" stroke="currentColor" strokeWidth="0" fill="none" />
    </svg>
  );
}

export function IconBox({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 2.2c.2 0 .4.05.55.14l7.5 4.2c.3.17.45.48.45.83v9.26c0 .35-.15.66-.45.83l-7.5 4.2a1.1 1.1 0 0 1-1.1 0l-7.5-4.2a.95.95 0 0 1-.45-.83V7.37c0-.35.15-.66.45-.83l7.5-4.2c.15-.09.35-.14.55-.14Zm0 2.16L5.9 7.5 12 10.94 18.1 7.5 12 4.36ZM4.9 9.2v7.1L11 19.7v-7.1L4.9 9.2Zm14.2 0-6.1 3.4v7.1l6.1-3.4V9.2Z" />
    </svg>
  );
}

export function IconFarm({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 2 3 7.5V21h6v-5.2a3 3 0 0 1 6 0V21h6V7.5L12 2Zm0 2.4 6.3 3.9-1.2.75L12 6.1 6.9 9.05l-1.2-.75L12 4.4ZM8.4 13.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7.2 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

export function IconBadge({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 1.6a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2Zm0 2.2a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm-1.7 3.55 1.1 1.1 2.4-2.55.95.9-3.3 3.5-2.05-2.05.9-.9ZM8.4 12.4l-2.9 8.1 3.2-.65L10.4 22l2.2-6.15-.85-1a6.9 6.9 0 0 1-3.35-2.45Zm7.2 0a6.9 6.9 0 0 1-3.35 2.45l-.85 1L13.6 22l1.7-2.15 3.2.65-2.9-8.1Z" />
    </svg>
  );
}

export function IconImage({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M4.5 3.5h15A1.5 1.5 0 0 1 21 5v14a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V5a1.5 1.5 0 0 1 1.5-1.5Zm.5 2v9.6l4.1-4.1a1 1 0 0 1 1.4 0l3.1 3.1 2.6-2.6a1 1 0 0 1 1.4 0L19 13V5.5H5ZM8.2 6.6a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Z" />
    </svg>
  );
}

/** Gear/cog icon — used for the "Services" nav link. */
export function IconServices({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm-1.15-8.3h2.3c.4 0 .74.28.83.67l.4 1.8c.55.2 1.06.46 1.53.78l1.75-.58a.85.85 0 0 1 1 .38l1.15 1.99a.85.85 0 0 1-.16 1.06l-1.38 1.25c.05.29.08.58.08.85s-.03.56-.08.85l1.38 1.25c.32.28.4.75.16 1.06l-1.15 1.99a.85.85 0 0 1-1 .38l-1.75-.58c-.47.32-.98.58-1.53.78l-.4 1.8a.85.85 0 0 1-.83.67h-2.3a.85.85 0 0 1-.83-.67l-.4-1.8a6.8 6.8 0 0 1-1.53-.78l-1.75.58a.85.85 0 0 1-1-.38l-1.15-1.99a.85.85 0 0 1 .16-1.06l1.38-1.25A6.3 6.3 0 0 1 5.32 12c0-.27.03-.56.08-.85L4.02 9.9a.85.85 0 0 1-.16-1.06l1.15-1.99a.85.85 0 0 1 1-.38l1.75.58c.47-.32.98-.58 1.53-.78l.4-1.8c.09-.4.43-.67.83-.67Z" />
    </svg>
  );
}

export function IconEnvelope({ size = 17 }) {
  return (
    <svg {...base(size)}>
      <path d="M3.5 5.5h17A1.5 1.5 0 0 1 22 7v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17V7a1.5 1.5 0 0 1 1.5-1.5Zm.7 1.9L12 12.6l7.8-5.2H4.2Zm16.3 1.75-8.05 5.36a1 1 0 0 1-1.1 0L3.5 9.15V17h17V9.15Z" />
    </svg>
  );
}

/** Decorative single-leaf accent tucked into the rounded ends of the pill. */
export function DecorLeaf({ size = 34, flip = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M20 37c9-4 15-11 15-22 0-3.5-.6-6.5-1.6-9-4 1-7.3 3-9.8 6.4C21 16 20.3 20.6 20.3 26c0-4.4-1-8.3-3.2-11.4C15 12 12 10.3 8.2 9.4 7.3 12 7 15 7 18c0 11.6 6 17.7 13 19Z"
        fill="url(#leafGrad)"
      />
      <path d="M20 37c-1-6-1-14 .3-22.6" stroke="#0f3d1a" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <defs>
        <linearGradient id="leafGrad" x1="7" y1="9" x2="35" y2="37" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a7d2c" />
          <stop offset="1" stopColor="#0f3d1a" />
        </linearGradient>
      </defs>
    </svg>
  );
}
