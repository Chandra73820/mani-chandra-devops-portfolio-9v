import { ArrowUpRight, GitFork, Search } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { ConceptHierarchy } from './concept-hierarchy'
import { EndpointExample } from './endpoint-example'

const techStack = ['.NET', 'C#', 'SQL Server', 'REST API']

const features = [
  {
    icon: GitFork,
    title: 'Concept hierarchy',
    text: 'Medical concepts are stored with parent–child relationships in SQL Server, forming a hierarchy that can be navigated from broad concepts down to more specific ones.',
  },
  {
    icon: Search,
    title: 'Descendant check endpoint',
    text: 'GET /api/Hierarchy/is-descendant takes a code system, version, parent code, and child code, and returns whether the child concept is a descendant of the parent concept.',
  },
]

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="projects-heading" eyebrow="03 / Projects" title="Featured projects" />

        <article
          aria-labelledby="cts-title"
          className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgb(59_130_246/0.14),transparent_70%)]"
          />

          <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-2">
            <div className="flex min-w-0 flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">Featured · Backend API</p>
              <h3 id="cts-title" className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Clinical Terminology Service API
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A RESTful service built with .NET and SQL Server for working with clinical terminology. It models
                medical concepts as a hierarchy and lets client applications ask how concepts relate to one another.
              </p>

              <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 space-y-6">
                {features.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-medium text-foreground">{title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="https://github.com/Chandra73820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  View on GitHub
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <ConceptHierarchy />
              <EndpointExample />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
