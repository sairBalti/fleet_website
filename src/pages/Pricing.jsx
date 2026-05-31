import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { images, pricingPlans } from "../data/siteContent";

function Pricing() {
  return (
    <div>
      <PageHero
        title="Simple, scalable pricing"
        subtitle="Choose a plan based on project volume and operational complexity. Upgrade as your program grows."
        image={images.heroSecondary}
      />

      <section className="bm-section">
        <div className="bm-container">
          <SectionTitle
            eyebrow="Plans"
            title="Invest in operational clarity"
            subtitle="All plans include core project control, role-based access, and construction-ready reporting."
            light
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`bm-card flex flex-col p-6 ${
                  plan.highlighted
                    ? "border-bm-accent ring-1 ring-bm-accent/40"
                    : ""
                }`}
              >
                {plan.highlighted ? (
                  <span className="mb-3 w-fit rounded-full bg-bm-accent/20 px-3 py-1 text-xs font-semibold text-bm-accent">
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                <p className="mt-2 text-3xl font-semibold text-bm-warm">{plan.price}</p>
                <p className="mt-3 text-sm text-bm-muted">{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-bm-text">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-bm-success" aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/request-demo" className="bm-btn-primary mt-6 w-full text-center">
                  Request Demo
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
