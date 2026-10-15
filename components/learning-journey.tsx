import { GitBranch, Rocket, Settings2, Wrench } from 'lucide-react'
import { SectionHeading } from './section-heading'

const areas = [
  {
    icon: Settings2,
    title: 'Infrastructure configuration',
    text: 'Setting up Linux systems and AWS resources by hand — subnets, route tables, gateways, and EC2 instances — to understand how each piece works.',
  },
  {
    icon: Wrench,
    title: 'Troubleshooting',
    text: 'Working through connectivity, permission, and build issues by reading logs, checking configuration, and testing changes step by step.',
  },
  {
    icon: GitBranch,
    title: 'Version control',
    text: 'Keeping project code and configuration in Git and GitHub, and using repositories as the trigger point for automated pipelines.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    text: 'Building and packaging applications with Maven and Docker, and automating the path from commit to deployment with Jenkins and GitHub Actions.',
  },
]

export function LearningJourney() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="journey-heading" eyebrow="04 / Learning" title="Learning journey" />

        <p className="-mt-6 mb-12 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          I learn by building. These are the practical areas I focus on as I work through hands-on Linux, cloud, and
          DevOps projects.
        </p>

        <ol className="grid gap-6 sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
