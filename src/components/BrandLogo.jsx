import PropTypes from "prop-types";

function BrandLogo({ className = "h-10 w-auto", variant = "dark" }) {
  const textFill = variant === "light" ? "#0B1120" : "#F8FAFC";
  const subFill = variant === "light" ? "#0F766E" : "#94A3B8";

  return (
    <svg
      className={className}
      viewBox="0 0 240 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BuildMind Construction Platform"
    >
      <defs>
        <linearGradient id="buildGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <rect x="2" y="4" width="56" height="56" rx="16" fill="url(#buildGradient)" />
      <path d="M14 42h32v6H14v-6zm4-22h8v20h-8V20zm12 0h8v20h-8V20zm12-8H14v6h32V12z" fill="#fff" />
      <text x="70" y="30" fontSize="22" fontWeight="700" fill={textFill}>
        BuildMind
      </text>
      <text x="70" y="48" fontSize="13" fontWeight="600" fill={subFill}>
        Construction Platform
      </text>
    </svg>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["dark", "light"]),
};

export default BrandLogo;
