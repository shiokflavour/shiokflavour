import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { BLOG_POSTS } from "@/app/lib/blog-posts";

export default function BlogPage() {
  const seriesPosts = BLOG_POSTS.filter(
    (post) => post.series?.name === "How to Order"
  ).sort((a, b) => (a.series?.number ?? 0) - (b.series?.number ?? 0));

  const journalPosts = BLOG_POSTS.filter((post) => post.series === undefined);

  const totalPlanned = 12;
  const publishedCount = seriesPosts.filter((post) => !post.comingSoon).length;

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          The Flavour Files
        </p>
        <h1 className="mb-8 max-w-4xl text-5xl font-bold leading-[1.0] text-white sm:text-6xl lg:text-7xl">
          Stories from
          <br />
          the Hawker Floor.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
          Guides, stories, rankings and opinions on Singapore&apos;s hawker
          culture. For the curious traveller and the proud local.
        </p>
        <div className="mt-10 h-px w-12 bg-sf-primary" />
      </section>

      <ChopstickDivider />

      {/* Section 1 — Signature Series: How to Order */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
            SIGNATURE SERIES
          </p>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            How to Order
          </h2>
          <p className="mb-3 max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
            The unwritten menus of Singapore food, one dish at a time.
          </p>
          <p className="text-sm text-sf-muted/70">
            {publishedCount} of {totalPlanned} servings published.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seriesPosts.map((post) => {
            const servingNumber = post.series?.number ?? 0;
            const badgeText = `HOW TO ORDER · SERVING #${servingNumber}${
              post.comingSoon ? " · COMING SOON" : ""
            }`;

            const cardInner = (
              <>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#1a1a1a]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sf-primary">
                    {badgeText}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors duration-200 group-hover:text-sf-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-sf-muted">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-sf-muted">
                    {post.comingSoon ? (
                      <span>Coming soon</span>
                    ) : (
                      <>
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-SG",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </>
            );

            if (post.comingSoon) {
              return (
                <div
                  key={post.slug}
                  className="group overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 opacity-60"
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:ring-1 hover:ring-sf-primary/30"
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </section>

      <ChopstickDivider />

      {/* Section 2 — The Hawker Journal */}
      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
            THE HAWKER JOURNAL
          </p>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Dispatches from the hawker line.
          </h2>
          <p className="mb-3 max-w-2xl text-base leading-relaxed text-sf-muted sm:text-lg">
            Deep dives, rankings and opinions on Singapore&apos;s food culture.
          </p>
        </div>

        {journalPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:ring-1 hover:ring-sf-primary/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#1a1a1a]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-sf-primary">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors duration-200 group-hover:text-sf-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-sf-muted">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-sf-muted">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-SG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </>
  );
}
