import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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

function parseInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderArticleBody(markdown: string) {
  const blocks = markdown.split(/\n\n+/).filter((b) => b.trim());
  return blocks.map((block, i) => {
    const t = block.trim();
    if (t.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-10 scroll-mt-24 text-2xl font-bold text-white first:mt-0 sm:text-3xl"
        >
          {t.slice(3)}
        </h2>
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
            <li key={j}>{parseInline(l.replace(/^-\s+/, "").trim())}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="my-4 leading-relaxed text-sf-muted">
        {parseInline(t.replace(/\n/g, " "))}
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
