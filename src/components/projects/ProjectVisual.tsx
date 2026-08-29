import type { ProjectVisualKey } from "@/types";

/**
 * Each project carries its own generated visual language, drawn as SVG so it
 * stays sharp, weighs almost nothing, and never becomes a stock thumbnail.
 */
export function ProjectVisual({ variant, label }: { variant: ProjectVisualKey; label: string }) {
  return (
    <div
      role="img"
      aria-label={`Abstract visual representing ${label}`}
      className={`project-visual project-visual-${variant} relative h-full w-full overflow-hidden`}
    >
      <svg
        viewBox="0 0 400 260"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <rect width="400" height="260" fill="var(--visual-bg)" />
        <circle
          cx="344"
          cy="12"
          r="118"
          fill="none"
          stroke="var(--visual-line)"
          strokeWidth="0.75"
        />
        <line x1="0" y1="224" x2="400" y2="224" stroke="var(--visual-line)" />
        {shapes[variant]}
      </svg>
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-5 text-sm font-extrabold tracking-[-0.035em] text-[var(--visual-ink)] uppercase sm:bottom-6 sm:left-7 sm:text-lg"
      >
        {label}
      </span>
    </div>
  );
}

const line = "var(--visual-line)";
const ink = "var(--visual-ink)";
const gold = "var(--visual-signal)";

const shapes: Record<ProjectVisualKey, React.ReactNode> = {
  decision: (
    <g>
      <rect x="32" y="28" width="104" height="48" fill={ink} />
      <rect x="264" y="28" width="104" height="48" fill="none" stroke={line} />
      <rect x="148" y="184" width="104" height="48" fill={gold} />
      <line x1="136" y1="52" x2="264" y2="52" stroke={line} />
      <line x1="84" y1="76" x2="184" y2="184" stroke={line} />
      <line x1="316" y1="76" x2="216" y2="184" stroke={line} />
      <circle cx="200" cy="52" r="8" fill={gold} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={48 + i * 116} y="108" width="72" height="28" fill="none" stroke={line} />
          <rect
            x={58 + i * 116}
            y="118"
            width={26 + i * 8}
            height="8"
            fill={i === 1 ? gold : ink}
          />
        </g>
      ))}
    </g>
  ),
  records: (
    <g>
      {Array.from({ length: 7 }, (_, row) => (
        <g key={row}>
          <rect x="40" y={26 + row * 30} width="320" height="18" fill="none" stroke={line} />
          <rect x="40" y={26 + row * 30} width="52" height="18" fill={row === 0 ? ink : "none"} />
          {row > 0 ? (
            <rect
              x="104"
              y={31 + row * 30}
              width={row % 3 === 0 ? 150 : 96}
              height="8"
              fill={line}
            />
          ) : null}
          {row === 3 ? <rect x="320" y={26 + row * 30} width="40" height="18" fill={gold} /> : null}
        </g>
      ))}
    </g>
  ),
  commerce: (
    <g>
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const featured = row === 1 && col === 2;
          return (
            <g key={`${row}-${col}`}>
              <rect
                x={36 + col * 84}
                y={24 + row * 74}
                width="66"
                height="54"
                fill={featured ? gold : "none"}
                stroke={featured ? gold : line}
              />
              <rect
                x={46 + col * 84}
                y={88 + row * 74}
                width={featured ? 46 : 34}
                height="6"
                fill={featured ? ink : line}
              />
            </g>
          );
        }),
      )}
      <path d="M300 214h44l-6 22h-31z" fill={ink} />
      <circle cx="312" cy="244" r="4" fill={gold} />
      <circle cx="334" cy="244" r="4" fill={gold} />
    </g>
  ),
  finance: (
    <g>
      <line x1="40" y1="220" x2="360" y2="220" stroke={ink} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="40" y1={60 + i * 40} x2="360" y2={60 + i * 40} stroke={line} />
      ))}
      {[140, 96, 172, 60, 124, 44, 108].map((h, i) => (
        <rect
          key={i}
          x={56 + i * 44}
          y={220 - h}
          width="22"
          height={h}
          fill={i === 5 ? gold : ink}
          opacity={i === 5 ? 1 : 0.82}
        />
      ))}
      <polyline
        points="67,80 111,124 155,48 199,160 243,96 287,176 331,112"
        fill="none"
        stroke={gold}
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </g>
  ),
  attendance: (
    <g>
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => {
          const i = row * 10 + col;
          const kind = i % 9 === 0 ? "absent" : i % 7 === 0 ? "late" : "present";
          return (
            <rect
              key={i}
              x={44 + col * 32}
              y={44 + row * 34}
              width="22"
              height="22"
              fill={kind === "present" ? ink : kind === "late" ? gold : "none"}
              opacity={kind === "present" ? 0.85 : 1}
              stroke={kind === "absent" ? line : "none"}
            />
          );
        }),
      )}
      <line x1="44" y1="226" x2="360" y2="226" stroke={line} />
    </g>
  ),
  security: (
    <g>
      <polyline
        points="20,150 60,150 76,110 92,190 108,140 150,140 168,60 186,210 204,150 260,150 276,120 292,178 308,150 380,150"
        fill="none"
        stroke={ink}
        strokeWidth="1.5"
      />
      <line x1="20" y1="150" x2="380" y2="150" stroke={line} />
      <circle cx="168" cy="60" r="4" fill={gold} />
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={i}
          x1={20 + i * 32}
          y1="228"
          x2={20 + i * 32}
          y2={228 - ((i * 13) % 34) - 4}
          stroke={line}
        />
      ))}
      <rect x="20" y="22" width="42" height="10" fill={gold} />
      <rect x="70" y="22" width="86" height="10" fill={line} />
    </g>
  ),
};
