import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { aboutHighlights, images } from "../data/siteContent";

function About() {
  return (
    <div>
      <PageHero
        title="About BuildMind"
        subtitle="We are building the AI-powered operations platform contractors trust for on-time delivery, cost control, and safer job sites."
        image={images.aboutTeam}
      />

      <section className="bm-section">
        <div className="bm-container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={images.aboutTeam}
              alt="Construction technology team collaborating"
              className="rounded-2xl border border-bm-border object-cover shadow-xl"
              loading="lazy"
            />
            <div>
              <SectionTitle
                eyebrow="Who we are"
                title="Construction-first, not fleet-first"
                subtitle="Every workflow — from milestone planning to equipment redeployment — is designed around how general contractors actually run sites."
                light
                align="left"
              />
              <p className="text-bm-muted">
                BuildMind replaces fragmented spreadsheets and siloed tools with a single source of
                truth your PMs, supers, and finance teams can act on in real time.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="bm-card p-6">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-bm-muted">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/request-demo" className="bm-btn-primary">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
