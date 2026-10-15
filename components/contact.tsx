import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './github-icon'
import { SectionHeading } from './section-heading'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="contact-heading" eyebrow="04 / Contact" title="Get in touch" />

        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-8 md:p-12">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Interested in my work or want to discuss an opportunity? You can find my code and reach me through GitHub."}
          </p>

          <a
            href="https://github.com/Chandra73820"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-primary/40 bg-background/60 px-5 py-4 transition-colors hover:border-primary hover:bg-primary/10"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GithubIcon className="size-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm text-muted-foreground">GitHub</span>
              <span className="font-mono text-foreground">github.com/Chandra73820</span>
            </span>
            <ArrowUpRight
              className="ml-2 size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
