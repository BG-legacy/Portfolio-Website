"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  aboutIntroImage,
  aboutIntroParagraphs,
  aboutSections,
  siteConfig,
} from "@/frontend/data/portfolio";
import Typewriter from "@/frontend/components/Typewriter";
import RotatingTitle from "@/frontend/components/RotatingTitle";

const aboutIntroTypewriterText = aboutIntroParagraphs.join("\n\n");

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const [aboutIntroTypewriterActive, setAboutIntroTypewriterActive] =
    useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = aboutSectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAboutIntroTypewriterActive(true);
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative z-10">
      {/* Hero — first screen */}
      <section className="flex min-h-screen flex-col px-6 pt-24 pb-6 lg:px-10 lg:pt-28">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
          {/* Left — text */}
          <div className="flex-1">
            <h1 className="page-heading mb-6 text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <Typewriter text={siteConfig.name} speed={90} delay={300} />
            </h1>

            <p className="animate-fade-in-delay-2 mb-10 min-h-10 font-serif text-xl tracking-wide text-zinc-400 italic lg:text-2xl">
              <RotatingTitle />
            </p>

            <div className="animate-fade-in-delay-3 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="border border-white/30 px-6 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white hover:text-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — headshot blended into dark bg */}
          <div
            className={`shrink-0 transition-all duration-[1.8s] ease-out ${
              mounted
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            <div className="group relative">
              <div className="absolute -inset-10 rounded-full bg-amber-600/[0.06] blur-3xl transition-all duration-700 group-hover:bg-amber-500/[0.10]" />

              <div className="relative h-[360px] w-[280px] overflow-hidden rounded-2xl sm:h-[420px] sm:w-[320px] md:h-[440px] md:w-[350px]">
                <Image
                  src="/IMG_8446.png"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 768px) 280px, 350px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, #050505 0%, transparent 18%, transparent 65%, #050505 100%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #050505 0%, transparent 18%, transparent 82%, #050505 100%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 30%, #050505 85%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(120,60,10,0.12) 0%, transparent 40%)",
                  }}
                />
              </div>
            </div>
          </div>
          </div>
        </div>

        <a
          href="#about"
          className="animate-fade-in-delay-3 group mx-auto mt-4 flex shrink-0 flex-col items-center gap-2 pb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-300"
        >
          <span className="underline decoration-white/15 underline-offset-4 transition-colors group-hover:decoration-white/30">
            About me
          </span>
          <svg
            className="h-5 w-5 text-zinc-500 transition-transform group-hover:translate-y-0.5 group-hover:text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </section>

      {/* Intro — text + image; typewriter starts when section enters view */}
      <section
        ref={aboutSectionRef}
        id="about"
        className="scroll-mt-28 border-t border-white/5 px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-start md:gap-14 lg:gap-20">
          <div className="order-1">
            <p className="leading-relaxed text-zinc-400 whitespace-pre-wrap">
              <Typewriter
                text={aboutIntroTypewriterText}
                active={aboutIntroTypewriterActive}
                speed={14}
                delay={280}
                cursorClassName="bg-zinc-400"
              />
            </p>
          </div>
          <div className="order-2 mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <Image
                src={aboutIntroImage.src}
                alt={aboutIntroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personas — tabbed slider (one story at a time) */}
      <PersonaSlider />
    </main>
  );
}

function PersonaSlider() {
  const n = aboutSections.length;
  const [activeIdx, setActiveIdx] = useState(0);
  const [typewriterDone, setTypewriterDone] = useState<Record<string, boolean>>(
    {}
  );
  /** Avoid replaceState on first paint so we don't clobber #about or fight the Router. */
  const hashSyncReadyRef = useRef(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = aboutSections.findIndex((s) => s.id === hash);
    if (idx >= 0) setActiveIdx(idx);
  }, []);

  useEffect(() => {
    if (!hashSyncReadyRef.current) {
      hashSyncReadyRef.current = true;
      return;
    }
    const id = aboutSections[activeIdx]?.id;
    if (!id) return;
    window.history.replaceState(null, "", `#${id}`);
  }, [activeIdx]);

  const block = aboutSections[activeIdx];
  const go = useCallback(
    (delta: number) => {
      setActiveIdx((i) => (i + delta + n) % n);
    },
    [n]
  );

  return (
    <section
      id="personas"
      className="scroll-mt-28 border-t border-white/5 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="mono-label mb-8 text-center">Stories</p>

        {/* Tabs */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="About me sections"
        >
          {aboutSections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={activeIdx === i}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActiveIdx(i)}
              className={`border px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] transition-colors sm:px-4 sm:text-[0.65rem] ${
                activeIdx === i
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-zinc-500 hover:border-white/40 hover:text-zinc-300"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Panel + arrows */}
        <div className="flex items-stretch gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="group flex shrink-0 items-center justify-center self-start border border-white/15 px-2 py-16 text-zinc-500 transition-colors hover:border-white/30 hover:text-white sm:px-3"
            aria-label="Previous section"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <article
            className="min-h-[12rem] flex-1"
            role="tabpanel"
            id={`panel-${block.id}`}
            aria-labelledby={`tab-${block.id}`}
          >
            <h2 className="page-heading mb-6 text-2xl text-white sm:text-3xl md:text-4xl">
              {block.title}
            </h2>
            {block.typewriterOnScroll ? (
              typewriterDone[block.id] ? (
                <p className="leading-relaxed text-zinc-400 whitespace-pre-wrap">
                  {block.body}
                </p>
              ) : (
                <p className="leading-relaxed text-zinc-400 whitespace-pre-wrap">
                  <Typewriter
                    key={block.id}
                    text={block.body}
                    active
                    speed={12}
                    delay={200}
                    cursorClassName="bg-zinc-400"
                    onComplete={() =>
                      setTypewriterDone((prev) => ({
                        ...prev,
                        [block.id]: true,
                      }))
                    }
                  />
                </p>
              )
            ) : (
              <p className="leading-relaxed text-zinc-400">{block.body}</p>
            )}
          </article>

          <button
            type="button"
            onClick={() => go(1)}
            className="group flex shrink-0 items-center justify-center self-start border border-white/15 px-2 py-16 text-zinc-500 transition-colors hover:border-white/30 hover:text-white sm:px-3"
            aria-label="Next section"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <p className="mt-8 text-center font-mono text-[0.6rem] text-zinc-600">
          {activeIdx + 1} / {n}
        </p>
      </div>
    </section>
  );
}
