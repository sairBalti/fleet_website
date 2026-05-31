import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { images } from "../data/siteContent";

function Contact() {
  return (
    <div>
      <PageHero
        title="Contact BuildMind"
        subtitle="Tell us about your operation — we'll recommend the right rollout strategy for your construction programs."
        image={images.workforce}
      />

      <section className="bm-section">
        <div className="bm-container grid gap-8 lg:grid-cols-2">
          <div className="bm-card p-8">
            <h2 className="text-2xl font-semibold text-white">Talk to a product specialist</h2>
            <p className="mt-3 text-bm-muted">
              Request a demo and we will tailor the walkthrough to your projects, business type, and
              team scale.
            </p>
            <Link to="/request-demo" className="bm-btn-primary mt-6">
              Request Demo
            </Link>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-bm-text">Email</dt>
                <dd className="text-bm-muted">ssairabatool98@gmail.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-bm-text">Phone</dt>
                <dd className="text-bm-muted">+92 34800000</dd>
              </div>
              <div>
                <dt className="font-semibold text-bm-text">Office</dt>
                <dd className="text-bm-muted">
                  145 Innovation Drive, Mobility District
                  <br />
                  Skardu, Pakistan
                </dd>
              </div>
            </dl>
          </div>
          <img
            src={images.workforce}
            alt="Construction supervisors reviewing plans on site"
            className="rounded-2xl border border-bm-border object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
