import PropTypes from "prop-types";

function PageHero({ title, subtitle, image, children }) {
  return (
    <section className="relative overflow-hidden border-b border-bm-border bg-bm-surface">
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-bm-bg via-bm-bg/95 to-bm-bg/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-mesh-dark" />
      )}
      <div className="bm-container relative py-16 md:py-20">
        <h1 className="max-w-3xl text-4xl font-bold text-white md:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-bm-muted">{subtitle}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

export default PageHero;
