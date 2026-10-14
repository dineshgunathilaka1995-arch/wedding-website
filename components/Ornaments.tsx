type Floret = { x: number; y: number; r: number; hue: number; rot: number };

function buildFlorets(count: number): Floret[] {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const radius = Math.sqrt((i + 0.5) / count) * 92;
    const angle = i * golden;
    // Round so server (Node) and browser produce identical strings,
    // otherwise React reports a hydration mismatch.
    const round = (n: number) => Math.round(n * 100) / 100;
    return {
      x: round(100 + Math.cos(angle) * radius),
      y: round(100 + Math.sin(angle) * radius),
      r: 9 + (i % 4) * 1.6,
      hue: i % 5,
      rot: (i * 37) % 90,
    };
  });
}

const FLORETS = buildFlorets(58);
const TINTS = ["#f2dcd6", "#e6b9b6", "#cf8a90", "#b5555f", "#8f2f42"];

export function Hydrangea({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {FLORETS.map((f, i) => (
        <g key={i} transform={`translate(${f.x} ${f.y}) rotate(${f.rot})`}>
          {[0, 90, 180, 270].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy={-f.r * 0.55}
              rx={f.r * 0.42}
              ry={f.r * 0.6}
              transform={`rotate(${a})`}
              fill={TINTS[f.hue]}
              opacity="0.9"
              stroke="#6b1d2d"
              strokeOpacity="0.12"
              strokeWidth="0.4"
            />
          ))}
          <circle r={f.r * 0.14} fill="#b48e57" />
        </g>
      ))}
    </svg>
  );
}

export function LaceEdge({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`w-full h-6 ${flip ? "rotate-180" : ""} ${className}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="lace-scallop" width="36" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 0 H36 V6 A18 18 0 0 1 0 6 Z"
            fill="#fbf5ec"
            stroke="#b48e57"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <circle cx="18" cy="12" r="2.2" fill="none" stroke="#6b1d2d" strokeOpacity="0.35" />
          <circle cx="18" cy="12" r="0.7" fill="#6b1d2d" fillOpacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill="url(#lace-scallop)" />
    </svg>
  );
}

export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 16"
      aria-hidden="true"
      className={`mx-auto h-4 w-40 text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 8 H62" />
      <path d="M98 8 H158" />
      <path d="M80 2 C74 6 74 10 80 14 C86 10 86 6 80 2 Z" fill="currentColor" fillOpacity="0.4" />
      <circle cx="68" cy="8" r="1.6" fill="currentColor" />
      <circle cx="92" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}
