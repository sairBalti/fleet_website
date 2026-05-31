import { Link } from "react-router-dom";
import AiVisualization from "../components/AiVisualization";
import SectionTitle from "../components/SectionTitle";
import {
  aiIntegrations,
  blogPosts,
  features,
  images,
  industries,
  stats,
  trustPoints,
} from "../data/siteContent";

function Home() {
  return (
    <div className="bg-bm-bg">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-bm-border">
        <img
          src={images.hero}
          alt="Construction site with cranes and steel framework"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bm-bg/80 via-bm-bg/90 to-bm-bg" />
        <div className="absolute inset-0 bg-mesh-dark" />

        <div className="bm-container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="stagger-children">
            <p className="inline-flex items-center gap-2 rounded-full border border-bm-accent/30 bg-bm-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-bm-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-bm-accent" />
              AI-Powered Construction Operations
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              Build smarter job sites with real-time operational intelligence.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-bm-muted">
              BuildMind unifies projects, workforce, materials, and equipment — with AI that
              predicts delays, optimizes crews, and protects your margins before issues hit the
              field.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#solutions" className="bm-btn-primary">
                Explore Platform
              </a>
              <Link to="/request-demo" className="bm-btn-ghost">
                Request Demo
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-xl border border-bm-border bg-bm-card/70 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-bm-accent md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-bm-text">{item.label}</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">{item.trend}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <AiVisualization className="min-h-[280px] lg:min-h-[360px]" />
            <img
              src={images.aiDashboard}
              alt="Engineer reviewing digital construction plans on site"
              className="absolute -bottom-4 -right-2 hidden w-40 rounded-xl border border-bm-border object-cover shadow-2xl ring-2 ring-bm-accent/20 lg:block xl:w-48"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="border-b border-bm-border bg-bm-surface py-10" aria-label="Project gallery">
        <div className="bm-container">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {images.gallery.map((item, index) => (
              <figure
                key={item.alt}
                className="group relative overflow-hidden rounded-xl border border-bm-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bm-bg/90 to-transparent p-3 text-[10px] font-medium text-bm-muted opacity-0 transition group-hover:opacity-100">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bm-section">
        <div className="bm-container">
          <SectionTitle
            eyebrow="Platform"
            title="Operational solutions for every crew on site"
            subtitle="Purpose-built modules in one AI-first command center — from bid to closeout."
            light
          />
          <div className="stagger-children grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="bm-card group overflow-hidden transition hover:border-bm-accent/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feature.image}
                    alt=""
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bm-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bm-muted">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI section with image */}
      <section id="ai" className="bm-section border-y border-bm-border bg-bm-surface">
        <div className="bm-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Intelligence"
                title="AI integrations that understand construction"
                subtitle="Embedded models across scheduling, labor, equipment, and budget — not generic chat bolted on."
                light
                align="left"
              />
              <div className="grid gap-4">
                {aiIntegrations.map((integration) => (
                  <article
                    key={integration.name}
                    className="rounded-xl border border-bm-border bg-bm-bg/60 p-5 transition hover:border-bm-accent/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white">{integration.name}</h3>
                        <p className="mt-1 text-sm text-bm-muted">{integration.description}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-lg font-bold text-bm-warm">{integration.metric}</p>
                        <p className="text-[10px] uppercase text-slate-500">{integration.metricLabel}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={images.aiIntegrations}
                alt="Active construction site with structural work in progress"
                className="rounded-2xl border border-bm-border object-cover shadow-2xl"
                loading="lazy"
              />
              <AiVisualization className="absolute -bottom-6 -left-6 hidden w-[55%] border-bm-accent/30 lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bm-section">
        <div className="bm-container text-center">
          <SectionTitle
            eyebrow="Industries"
            title="Built for contractors at every scale"
            subtitle="Commercial, residential, infrastructure, and industrial programs — one platform."
            light
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-bm-border bg-bm-card px-5 py-2.5 text-sm font-medium text-bm-text transition hover:border-bm-accent hover:text-bm-accent"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bm-section bg-bm-surface">
        <div className="bm-container">
          <SectionTitle
            eyebrow="Trust"
            title="Enterprise-grade reliability"
            subtitle="Governance and security designed for mission-critical construction operations."
            light
          />
          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => (
              <article key={point.title} className="bm-card p-6">
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-bm-accent to-bm-warm" />
                <h3 className="font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-bm-muted">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section id="blogs" className="bm-section">
        <div className="bm-container">
          <SectionTitle
            eyebrow="Insights"
            title="Construction operations playbook"
            subtitle="Practical guides on AI scheduling, equipment, and field safety."
            light
          />
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="bm-card overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-bm-accent/15 px-3 py-1 text-xs font-semibold text-bm-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
                  <p className="mt-2 text-sm text-bm-muted">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="mt-4 inline-block text-sm font-semibold text-bm-accent hover:text-sky-300"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-bm-border bg-gradient-to-r from-bm-card to-bm-surface p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-white">Ready to modernize your job sites?</h3>
            <p className="mx-auto mt-3 max-w-lg text-bm-muted">
              See how BuildMind maps to your projects, crews, and equipment in a personalized demo.
            </p>
            <Link to="/request-demo" className="bm-btn-primary mt-6">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
