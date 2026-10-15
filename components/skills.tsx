import { Cloud, Code2, Container, Database, GitBranch, Network, Server, Terminal, Workflow, Braces } from 'lucide-react'
import { SectionHeading } from './section-heading'

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    skills: [
      { name: '.NET', icon: Code2 },
      { name: 'C#', icon: Braces },
      { name: 'REST APIs', icon: Network },
    ],
  },
  {
    category: 'Data',
    skills: [{ name: 'SQL Server', icon: Database }],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
    ],
  },
  {
    category: 'Platforms & DevOps',
    skills: [
      { name: 'Linux', icon: Terminal },
      { name: 'AWS', icon: Cloud },
      { name: 'Docker', icon: Container },
      { name: 'Jenkins', icon: Workflow },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="skills-heading" eyebrow="02 / Skills" title="Technical skills" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Server className="size-4 text-primary" aria-hidden="true" />
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
