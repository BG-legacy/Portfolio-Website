import PageWrapper from "@/frontend/components/PageWrapper";
import { siteConfig } from "@/frontend/data/portfolio";
import ContactForm from "./ContactForm";

/** Accepts either `xgonbapb` or full `https://formspree.io/f/xgonbapb` in env. */
function resolveFormspreeAction(raw: string | undefined): string | null {
  const t = raw?.trim();
  if (!t) return null;
  if (/^https?:\/\//i.test(t)) {
    try {
      const u = new URL(t);
      if (u.hostname.endsWith("formspree.io") && u.pathname.startsWith("/f/")) {
        return `https://formspree.io${u.pathname}`;
      }
    } catch {
      return null;
    }
    return null;
  }
  return `https://formspree.io/f/${t}`;
}

export default function ContactPage() {
  const formAction = resolveFormspreeAction(
    process.env.NEXT_PUBLIC_FORMSPREE_ID,
  );

  return (
    <PageWrapper>
      <p className="mono-label animate-fade-in mb-2">Get in Touch</p>
      <h1 className="page-heading animate-fade-in-delay-1 mb-6 text-5xl text-white sm:text-6xl">
        Let&apos;s work
        <br />
        together
      </h1>

      <p className="animate-fade-in-delay-2 mb-16 max-w-xl leading-relaxed text-zinc-400">
        Have a project in mind, want to collaborate, or just want to say hello?
        I&apos;d love to hear from you. Fill out the form or reach out directly.
      </p>

      <div className="animate-fade-in-delay-3 grid gap-16 lg:grid-cols-[1fr_auto]">
        <ContactForm formAction={formAction} />

        {/* Contact details */}
        <div className="space-y-8 lg:pt-6">
          <div>
            <h3 className="mono-label mb-2">Email</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>
            <h3 className="mono-label mb-2">Location</h3>
            <p className="text-sm text-zinc-400">{siteConfig.location}</p>
          </div>
          <div>
            <h3 className="mono-label mb-2">Socials</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(siteConfig.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-zinc-500 transition-colors hover:text-white"
                >
                  {name} &rarr;
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
