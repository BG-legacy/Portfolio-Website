import PageWrapper from "@/frontend/components/PageWrapper";
import { workExperience } from "@/frontend/data/portfolio";

export const metadata = { title: "Experience | Bernard Ginn Jr." };

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Career</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-16 text-5xl text-white sm:text-6xl">
        Work
        <br />
        Experience
      </h1>

      <div className="animate-fade-in-delay-2 space-y-8">
        {workExperience.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-white/15 hover:bg-white/[0.04] lg:p-10"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="mono-label mb-1 block">{job.period}</span>
                <h2 className="font-serif text-3xl font-light text-white">
                  {job.role}
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  {job.company} &middot; {job.location}
                </p>
                {"website" in job && job.website ? (
                  <p className="mt-3">
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label text-xs text-zinc-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/40"
                    >
                      Website
                    </a>
                  </p>
                ) : null}
              </div>
            </div>

            <ul className="space-y-3">
              {job.description.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 leading-relaxed text-zinc-400"
                >
                  <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-white/30" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
