import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
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
      return (
        <h2
          key={i}
          className="mt-16 mb-6 scroll-mt-24 border-b border-white/10 pb-3 text-2xl font-bold text-white first:mt-0 sm:text-3xl"
        >
          {t.replace(/^## /, "")}
        </h2>
      );
    }
    if (t.startsWith("![")) {
      const match = t.match(/!\[.*?\]\((.*?)\)/);
      if (match) {
        return (
          <div key={i} className="my-8 overflow-hidden rounded-2xl">
            <img
              src={match[1]}
              alt=""
              className="h-64 w-full object-cover sm:h-80"
            />
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

  return (
    <>
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sf-primary">
          {post.category}
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mb-8 text-lg text-white/80 sm:text-xl">{post.subtitle}</p>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-sf-muted">
          <span>{post.readTime}</span>
          <span>·</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-SG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="prose-article text-base sm:text-lg">
          {renderArticleBody(post.content)}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-sf-primary transition-colors hover:text-sf-primary/90"
          >
            ← Back to The Flavour Files
          </Link>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
