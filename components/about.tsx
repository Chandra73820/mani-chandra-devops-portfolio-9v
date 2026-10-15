import { SectionHeading } from './section-heading'

const focusAreas = [
  { title: 'Backend APIs', text: 'Designing RESTful services with .NET and C#.' },
  { title: 'Data modeling', text: 'Structuring relational data in SQL Server.' },
  { title: 'Delivery tooling', text: 'Working with Git, Docker, Jenkins, Linux, and AWS.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="about-heading" eyebrow="01 / About" title="About me" />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
            <p>
              {"I'm "}
              <span className="text-foreground">Mani Chandra Edara</span>
              {', a developer focused on building backend services with the Microsoft stack. I enjoy turning structured domain data into clean, well-defined APIs that other applications can rely on.'}
            </p>
            <p>
              {'My featured project is a '}
              <span className="text-foreground">Clinical Terminology Service API</span>
              {', built with .NET and SQL Server. It represents medical concepts as a hierarchy and exposes an endpoint to determine whether one concept is a descendant of another.'}
            </p>
            <p>
              {'Alongside .NET development, I work with Git and GitHub for version control, and with Linux, Docker, Jenkins, and AWS for building and running software.'}
            </p>
          </div>

          <ul className="space-y-4 md:col-span-2">
            {focusAreas.map((area) => (
              <li
                key={area.title}
                className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <h3 className="font-medium text-foreground">{area.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
