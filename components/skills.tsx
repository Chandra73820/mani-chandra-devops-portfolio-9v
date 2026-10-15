import {
  Box,
  Cloud,
  Container,
  FileCode2,
  FolderGit2,
  GitBranch,
  HardDrive,
  Network,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  Waypoints,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const skillGroups: { category: string; icon: LucideIcon; skills: { name: string; icon: LucideIcon }[] }[] = [
  {
    category: 'Linux & Scripting',
    icon: Terminal,
    skills: [
      { name: 'Linux', icon: Terminal },
      { name: 'Bash', icon: FileCode2 },
    ],
  },
  {
    category: 'AWS Cloud',
    icon: Cloud,
    skills: [
      { name: 'EC2', icon: Server },
      { name: 'VPC', icon: Waypoints },
      { name: 'IAM', icon: ShieldCheck },
      { name: 'S3', icon: HardDrive },
      { name: 'Networking', icon: Network },
    ],
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: FolderGit2 },
    ],
  },
  {
    category: 'CI/CD & Containers',
    icon: Workflow,
    skills: [
      { name: 'Jenkins', icon: Workflow },
      { name: 'Maven', icon: Package },
      { name: 'Docker', icon: Container },
      { name: 'GitHub Actions', icon: Box },
      { name: 'CI/CD', icon: Rocket },
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
                <group.icon className="size-4 text-primary" aria-hidden="true" />
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
