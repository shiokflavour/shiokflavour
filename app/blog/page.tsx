import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { BLOG_POSTS } from "@/app/lib/blog-posts";

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

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

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        {/* Featured Article */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-8 block overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all duration-300 hover:ring-1 hover:ring-sf-primary/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="relative h-64 min-h-[280px] overflow-hidden sm:h-full">
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1a1a]/30" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-sf-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Featured
                </span>
                <span className="text-sm text-sf-muted">{featured.category}</span>
              </div>
              <h2 className="mb-4 text-2xl font-bold leading-snug text-white transition-colors duration-200 group-hover:text-sf-primary sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-sf-muted">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-sf-muted">
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>
                  {new Date(featured.publishedAt).toLocaleDateString("en-SG", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
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
      </section>

      <SiteFooter />
    </>
  );
}
