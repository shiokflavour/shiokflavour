import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import ChopstickDivider from "@/app/components/chopstick-divider";
import { BLOG_POSTS } from "@/app/lib/blog-posts";

type Props = { params: Promise<{ slug: string }> };

function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found | ShiokFlavour" };
  return {
    title: `${post.title} | The Flavour Files | ShiokFlavour`,
    description: post.excerpt,
  };
}

function renderArticleBody(markdown: string) {
  const blocks = markdown.split(/\n\n+/).filter((b) => b.trim());
  return blocks.map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      const title = t.replace(/^## /, "");
      const isNumbered = title.startsWith("#");
      return (
        <div
          key={i}
          className={`mt-16 mb-6 first:mt-0 ${isNumbered ? "scroll-mt-24" : ""}`}
        >
          <div className="mb-1 flex items-center gap-3">
            <div className="h-px flex-1 bg-sf-primary/30" />
          </div>
          <h2 className="border-b border-white/10 pb-3 text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
        </div>
      );
    }
    if (t.startsWith("![")) {
      const match = t.match(/!\[.*?\]\((.*?)\)/);
      if (match) {
        const imgSrc = match[1];
        const imageToSlug: Record<string, string> = {
          "/images/food/chicken-rice.jpg": "hainanese-chicken-rice",
          "/images/food/char-kway-teow.jpg": "char-kway-teow",
          "/images/food/laksa.jpg": "laksa",
          "/images/food/roti-prata.jpg": "roti-prata",
          "/images/food/bak-kut-teh.jpg": "bak-kut-teh",
          "/images/food/satay.jpg": "satay",
          "/images/food/chilli-crab.jpg": "chilli-crab",
          "/images/food/hokkien-mee.jpg": "hokkien-mee",
          "/images/food/ice-kachang.jpg": "ice-kachang",
          "/images/food/kaya-toast.jpg": "kaya-toast",
        };
        const heritageSlug = imageToSlug[imgSrc];
        return (
          <div
            key={i}
            className="my-8 rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            {heritageSlug ? (
              <Link href={`/food-heritage/${heritageSlug}`}>
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
                  <div className="flex flex-col items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-sf-primary px-5 py-2.5 text-sm font-bold text-white">
                      Explore this dish →
                    </div>
                    <p className="text-xs text-white/80">
                      Read the full heritage story
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <img
                src={imgSrc}
                alt=""
                className="w-full h-64 sm:h-80 object-cover"
              />
            )}
          </div>
        );
      }
    }
    if (t.startsWith("---")) {
      return <div key={i} className="my-8 border-t border-white/10" />;
    }
    if (t.startsWith("> ")) {
      return (
        <div
          key={i}
          className="my-6 rounded-xl border-l-4 border-sf-primary bg-[#1a1a1a] px-6 py-4"
        >
          <p className="text-sm font-medium text-sf-muted">
            {t.replace(/^> /, "")}
          </p>
        </div>
      );
    }
    if (t.startsWith("**Where to find it:**")) {
      return (
        <div
          key={i}
          className="my-4 rounded-xl border border-sf-primary/20 bg-sf-primary/10 px-5 py-4"
        >
          <p className="text-sm font-semibold text-sf-primary">
            📍 {t.replace("**Where to find it:**", "Where to find it:")}
          </p>
        </div>
      );
    }
    if (t.startsWith('**"') && t.endsWith("**")) {
      return (
        <p
          key={i}
          className="my-6 text-xl font-bold italic leading-snug text-sf-primary sm:text-2xl"
        >
          {t.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (t.startsWith("🥤")) {
      return (
        <div
          key={i}
          className="my-4 flex items-start gap-3 rounded-xl bg-white/5 px-5 py-4"
        >
          <span className="flex-shrink-0 text-xl">🥤</span>
          <p className="text-sm leading-relaxed text-white/80">
            {t
              .replace(/^🥤\s*/, "")
              .split("**")
              .map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j} className="text-white">
                    {part}
                  </strong>
                ) : (
                  part
                ),
              )}
          </p>
        </div>
      );
    }
    const buttonMatch = t.match(/^\[BUTTON:\s*(.+)\s*→\s*(.+?)\]$/);
    if (buttonMatch) {
      const label = buttonMatch[1].trim();
      const url = buttonMatch[2].trim();
      const isExternal = /^https?:\/\//i.test(url);
      const buttonClass =
        "inline-flex items-center justify-center rounded-xl bg-sf-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sf-primary/90 sm:text-base";
      return (
        <div key={i} className="my-10 flex justify-center">
          {isExternal ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              {label}
            </a>
          ) : (
            <Link href={url} className={buttonClass}>
              {label}
            </Link>
          )}
        </div>
      );
    }
    const lines = t.split("\n").filter((l) => l.trim());
    if (
      lines.length > 0 &&
      lines.every((l) => l.trim().startsWith("- "))
    ) {
      return (
        <ul
          key={i}
          className="my-4 list-disc space-y-2 pl-6 text-sf-muted marker:text-sf-primary"
        >
          {lines.map((l, j) => (
            <li key={j}>
              {l
                .replace(/^-\s+/, "")
                .trim()
                .split("**")
                .map((part, k) =>
                  k % 2 === 1 ? (
                    <strong key={k} className="font-semibold text-white">
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="mb-6 text-base leading-relaxed text-sf-muted sm:text-lg"
      >
        {t.replace(/\n/g, " ").split("**").map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="font-semibold text-white">
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </p>
    );
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const paragraphs = renderArticleBody(post.content);

  return (
    <>
      <SiteHeader />

      <section className="pb-0 pt-16">
        <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <Link
              href="/blog"
              className="text-sm text-sf-muted transition-colors hover:text-white"
            >
              ← The Flavour Files
            </Link>
            <span className="text-white/20">·</span>
            <span className="text-sm font-semibold text-sf-primary">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-sf-muted sm:text-xl">
            {post.subtitle}
          </p>
          <div className="mb-10 flex items-center gap-4 text-sm text-sf-muted">
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

        <div className="relative mb-16 h-64 w-full sm:h-96 lg:h-[500px]">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          <article className="prose-article min-w-0 max-w-3xl flex-1 text-base sm:text-lg">
            {paragraphs}
          </article>

          <aside className="w-full flex-shrink-0 lg:w-80">
            <div className="flex flex-col gap-6 lg:sticky lg:top-8">
              <div className="rounded-2xl bg-[#1a1a1a] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Go Deeper
                </p>
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  Read the full heritage story behind each dish.
                </p>
                <div
                  className="flex max-h-80 flex-col gap-2 overflow-y-auto pr-1"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#f97316 #1a1a1a",
                  }}
                >
                  {[
                    {
                      name: "Hainanese Chicken Rice",
                      slug: "hainanese-chicken-rice",
                      img: "/images/food/chicken-rice.jpg",
                    },
                    {
                      name: "Char Kway Teow",
                      slug: "char-kway-teow",
                      img: "/images/food/char-kway-teow.jpg",
                    },
                    {
                      name: "Laksa",
                      slug: "laksa",
                      img: "/images/food/laksa.jpg",
                    },
                    {
                      name: "Roti Prata",
                      slug: "roti-prata",
                      img: "/images/food/roti-prata.jpg",
                    },
                    {
                      name: "Satay",
                      slug: "satay",
                      img: "/images/food/satay.jpg",
                    },
                    {
                      name: "Bak Kut Teh",
                      slug: "bak-kut-teh",
                      img: "/images/food/bak-kut-teh.jpg",
                    },
                    {
                      name: "Chilli Crab",
                      slug: "chilli-crab",
                      img: "/images/food/chilli-crab.jpg",
                    },
                    {
                      name: "Hokkien Mee",
                      slug: "hokkien-mee",
                      img: "/images/food/hokkien-mee.jpg",
                    },
                    {
                      name: "Ice Kachang",
                      slug: "ice-kachang",
                      img: "/images/food/ice-kachang.jpg",
                    },
                    {
                      name: "Kaya Toast",
                      slug: "kaya-toast",
                      img: "/images/food/kaya-toast.jpg",
                    },
                  ].map((dish) => (
                    <Link
                      key={dish.slug}
                      href={`/food-heritage/${dish.slug}`}
                      className="group flex items-center gap-3 rounded-xl p-2 transition-all hover:bg-white/5"
                    >
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={dish.img}
                          alt={dish.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-white transition-colors group-hover:text-sf-primary">
                          {dish.name}
                        </p>
                        <p className="text-xs text-white/40">Heritage story →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#1a1a1a] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Find These Dishes
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "Maxwell Food Centre",
                      region: "Chinatown",
                      slug: "maxwell-food-centre",
                      img: "/images/hawkers/maxwell.jpg",
                    },
                    {
                      name: "Old Airport Road",
                      region: "East",
                      slug: "old-airport-road-food-centre",
                      img: "/images/hawkers/old-airport-road.jpg",
                    },
                    {
                      name: "Lau Pa Sat",
                      region: "CBD",
                      slug: "lau-pa-sat",
                      img: "/images/hawkers/lau-pa-sat.jpg",
                    },
                  ].map((hc) => (
                    <Link
                      key={hc.slug}
                      href={`/hawker/${hc.slug}`}
                      className="group flex items-center gap-3 rounded-xl p-2 transition-all hover:bg-white/5"
                    >
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={hc.img}
                          alt={hc.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white transition-colors group-hover:text-sf-primary">
                          {hc.name}
                        </p>
                        <p className="text-xs text-white/40">{hc.region}</p>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/hawker-centres"
                    className="mt-1 text-xs font-semibold text-sf-primary hover:underline"
                  >
                    View all hawker centres →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl bg-[#1a1a1a] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Latest From The Files
                </p>
                <div className="flex flex-col gap-4">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex items-start gap-3 rounded-xl p-2 transition-all hover:bg-white/5"
                    >
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={p.heroImage}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sf-primary">
                          {p.category}
                        </p>
                        <p className="line-clamp-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-sf-primary">
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#1a1a1a] p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-sf-primary">
                  Search Heritage Dishes
                </p>
                <p className="mb-3 text-sm leading-relaxed text-white/60">
                  Find the story behind any Singapore dish.
                </p>
                <Link
                  href="/food-heritage"
                  className="block w-full rounded-xl bg-sf-primary py-3 text-center text-sm font-semibold text-white transition-all hover:bg-sf-primary/90"
                >
                  Explore Food Heritage →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ChopstickDivider />

      <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sf-primary">
          Keep Reading
        </p>
        <h2 className="mb-8 text-2xl font-bold text-white">
          More From The Flavour Files
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl bg-[#1a1a1a] transition-all hover:ring-1 hover:ring-sf-primary/30"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sf-primary">
                  {p.category}
                </p>
                <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-sf-primary">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
