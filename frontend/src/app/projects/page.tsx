import PageWrapper from "@/frontend/components/PageWrapper";
import { projects, siteConfig } from "@/frontend/data/portfolio";

export const metadata = { title: "Projects | Bernard Ginn Jr." };

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Selected Work</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-16 text-5xl text-white sm:text-6xl">
        Projects
      </h1>

      <div className="animate-fade-in-delay-2 space-y-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/15 hover:bg-white/[0.04] lg:p-10"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mono-label mb-1 block">{project.year}</span>
                <h2 className="font-serif text-3xl font-light text-white">
                  {project.title}
                </h2>
              </div>
              <span className="font-mono text-[0.6rem] text-zinc-600">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <p className="mb-6 max-w-2xl leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-6">
              {project.link && !project.hideLiveDemo ? (
                <a
                  href={project.link}
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-70"
                >
                  Live Demo &rarr;
                </a>
              ) : null}
              <a
                href={project.github}
                className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 transition-colors hover:text-white"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="animate-fade-in-delay-3 mt-20 border-t border-white/10 pt-12">
        <p className="mono-label mb-3">More work</p>
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-zinc-400">
          This page highlights a curated set of projects. For the full list of
          repositories and ongoing work, visit GitHub.
        </p>
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
        >
          See more on GitHub &rarr;
        </a>
      </div>
    </PageWrapper>
  );
}
