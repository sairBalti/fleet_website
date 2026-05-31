import PropTypes from "prop-types";

function SectionTitle({ eyebrow, title, subtitle, light = false, align = "center" }) {
  const alignClass = align === "left" ? "text-left mx-0" : "text-center mx-auto";
  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-bm-accent" : "text-bm-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-base ${light ? "text-bm-muted" : "text-bm-muted"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  light: PropTypes.bool,
  align: PropTypes.oneOf(["center", "left"]),
};

export default SectionTitle;
