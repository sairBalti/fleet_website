import PropTypes from "prop-types";

/**
 * Animated AI + construction data-flow visualization (pure SVG, no deps).
 */
function AiVisualization({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-bm-border bg-bm-card/60 p-4 ${className}`}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark" />
      <div className="absolute inset-0 animate-grid-pulse bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <svg viewBox="0 0 400 320" className="relative z-10 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <filter id="aiGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Building under construction */}
        <g transform="translate(24, 140)">
          <rect x="0" y="80" width="100" height="8" fill="#2a3548" rx="2" />
          <rect className="build-floor" x="12" y="56" width="76" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" rx="2" />
          <rect className="build-floor build-floor-2" x="12" y="32" width="76" height="24" fill="#243044" stroke="#38bdf8" strokeWidth="1" rx="2" />
          <rect className="build-floor build-floor-3" x="12" y="8" width="76" height="24" fill="#2d3f56" stroke="#f59e0b" strokeWidth="1" rx="2" />
          <rect className="build-floor build-floor-4" x="28" y="-16" width="44" height="24" fill="#334155" stroke="#f59e0b" strokeWidth="1" rx="2" />
          <line x1="100" y1="0" x2="100" y2="88" stroke="#475569" strokeWidth="2" />
          <g className="origin-[100px_0px] animate-crane-swing" style={{ transformOrigin: "100px 0px" }}>
            <line x1="100" y1="0" x2="168" y2="36" stroke="#94a3b8" strokeWidth="2" />
            <line x1="168" y1="36" x2="168" y2="52" stroke="#f59e0b" strokeWidth="2" />
          </g>
        </g>

        {/* Data flow lines */}
        <path
          d="M130 120 C 180 100, 220 90, 260 110"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          className="ai-flow-line"
        />
        <path
          d="M130 150 C 190 140, 230 130, 270 145"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          className="ai-flow-line ai-flow-line-delay-1"
        />
        <path
          d="M130 180 C 200 175, 240 165, 290 155"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
          className="ai-flow-line ai-flow-line-delay-2"
        />

        {/* AI core */}
        <g transform="translate(280, 80)" filter="url(#aiGlow)">
          <circle cx="60" cy="60" r="52" fill="#0f172a" stroke="url(#aiCoreGrad)" strokeWidth="2" className="animate-pulse-glow" />
          <circle cx="60" cy="60" r="36" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" className="animate-[spin_12s_linear_infinite]" />
          <text x="60" y="56" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="700">
            AI CORE
          </text>
          <text x="60" y="72" textAnchor="middle" fill="#94a3b8" fontSize="8">
            OPS ENGINE
          </text>
        </g>

        {/* Orbiting nodes */}
        {[
          { cx: 320, cy: 40, label: "Schedule", color: "#38bdf8" },
          { cx: 370, cy: 100, label: "Labor", color: "#34d399" },
          { cx: 350, cy: 180, label: "Fleet", color: "#f59e0b" },
          { cx: 300, cy: 200, label: "Cost", color: "#a78bfa" },
        ].map((node, i) => (
          <g key={node.label} className={i % 2 === 0 ? "animate-float-slow" : "animate-float-delayed"}>
            <circle cx={node.cx} cy={node.cy} r="22" fill="#1a2332" stroke={node.color} strokeWidth="1.5" />
            <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#e2e8f0" fontSize="7" fontWeight="600">
              {node.label}
            </text>
          </g>
        ))}

        <path
          d="M320 62 L340 100 M340 122 L350 158 M320 140 L300 188"
          fill="none"
          stroke="#475569"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="ai-flow-line ai-flow-line-delay-3"
        />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-40">
        <div className="h-1 w-full animate-scan-line bg-gradient-to-r from-transparent via-bm-accent to-transparent" />
      </div>
    </div>
  );
}

AiVisualization.propTypes = {
  className: PropTypes.string,
};

export default AiVisualization;
