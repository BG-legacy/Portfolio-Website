import PageWrapper from "@/frontend/components/PageWrapper";
import { education } from "@/frontend/data/portfolio";

export const metadata = { title: "Education | Bernard Ginn Jr." };

export default function EducationPage() {
  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Academic Background</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-16 text-5xl text-white sm:text-6xl">
        School
        <br />
        Experience
      </h1>

      <div className="animate-fade-in-delay-2 space-y-8">
        {education.map((edu) => {
          const hasCoursework = edu.coursework.length > 0;
          const hasActivities = edu.activities.length > 0;
          return (
          <div
            key={edu.school}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-8 lg:p-10"
          >
            <div className={hasCoursework || hasActivities ? "mb-8" : ""}>
              <span className="mono-label mb-1 block">{edu.period}</span>
              <h2 className="font-serif text-3xl font-light text-white lg:text-4xl">
                {edu.school}
              </h2>
              <p className="mt-1 text-zinc-500">{edu.degree}</p>
            </div>

            {(hasCoursework || hasActivities) && (
            <div
              className={`grid gap-10 ${hasCoursework && hasActivities ? "lg:grid-cols-2" : ""}`}
            >
              {hasCoursework && (
              <div>
                <h3 className="mono-label mb-4">Relevant Coursework</h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {edu.coursework.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
              )}

              {hasActivities && (
              <div>
                <h3 className="mono-label mb-4">Activities & Leadership</h3>
                <ul className="space-y-3">
                  {edu.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-white/20" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
              )}
            </div>
            )}
          </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
