import PageWrapper from "@/frontend/components/PageWrapper";
import { languages, skills } from "@/frontend/data/portfolio";

export const metadata = { title: "Languages & Skills | Bernard Ginn Jr." };

export default function LanguagesPage() {
  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Technical Proficiency</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-16 text-5xl text-white sm:text-6xl">
        Languages &<br />
        Technologies
      </h1>

      {/* Languages grid */}
      <div className="animate-fade-in-delay-2 mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.04]"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-medium text-white">{lang.name}</h3>
              <span className="mono-label rounded border border-white/10 px-2 py-0.5 text-[0.6rem]">
                {lang.level}
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-zinc-500">
              {lang.description}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 flex-1 rounded-full bg-white/5">
                <div
                  className="h-1 rounded-full bg-white/30 transition-all group-hover:bg-white/50"
                  style={{
                    width: `${Math.min((lang.years / 5) * 100, 100)}%`,
                  }}
                />
              </div>
              <span className="font-mono text-[0.6rem] text-zinc-600">
                {lang.years}yr{lang.years !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Frameworks & Tools */}
      <div className="animate-fade-in-delay-3 grid gap-12 lg:grid-cols-3">
        <div>
          <h3 className="mono-label mb-4">Technologies & frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mono-label mb-4">Developer tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mono-label mb-4">Concepts</h3>
          <div className="flex flex-wrap gap-2">
            {skills.concepts.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
