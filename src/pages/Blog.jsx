import PageHero from "../components/PageHero";
import { blogPosts, images } from "../data/siteContent";

function Blog() {
  return (
    <div>
      <PageHero
        title="BuildMind Blog"
        subtitle="Practical insights on construction scheduling, workforce management, equipment, and safety."
        image={images.safety}
      />

      <section className="bm-section">
        <div className="bm-container">
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="bm-card overflow-hidden">
                <img src={post.image} alt="" className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-bm-accent/15 px-3 py-1 text-xs font-semibold text-bm-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-white">{post.title}</h2>
                  <p className="mt-2 text-sm text-bm-muted">{post.excerpt}</p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold text-bm-accent hover:text-sky-300"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Coming soon →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
