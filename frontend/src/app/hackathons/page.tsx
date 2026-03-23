import PageWrapper from "@/frontend/components/PageWrapper";
import { hackathons } from "@/frontend/data/portfolio";

export const metadata = { title: "Hackathons | Bernard Ginn Jr." };

export default function HackathonsPage() {
  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Competitions</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-16 text-5xl text-white sm:text-6xl">
        Hackathons
      </h1>

      <div className="animate-fade-in-delay-2 relative space-y-0">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-[7px] w-px bg-white/10 lg:left-[11px]" />

        {hackathons.map((hack) => (
          <div key={hack.name} className="relative pl-10 pb-12 lg:pl-14">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-white/30 bg-[#050505] lg:left-1 lg:h-[23px] lg:w-[23px]">
              <div className="absolute inset-[3px] rounded-full bg-white/20 lg:inset-[5px]" />
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.04] lg:p-8">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="mono-label mb-1 block">{hack.date}</span>
                  <h2 className="font-serif text-2xl font-light text-white lg:text-3xl">
                    {hack.name}
                  </h2>
                </div>
                <span className="inline-flex rounded border border-white/20 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-white/80">
                  {hack.placement}
                </span>
              </div>

              <p className="mono-label mb-3 text-white/50">
                Project: {hack.project}
              </p>
              <p className="mb-5 max-w-2xl leading-relaxed text-zinc-400">
                {hack.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {hack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
