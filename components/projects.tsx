import { ArrowUpRight, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { VpcDiagram } from './vpc-diagram'
import { PipelineFlow } from './pipeline-flow'

function TechList({ items }: { items: string[] }) {
  return (
    <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function GithubLink() {
  return (
    <a
      href="https://github.com/Chandra73820"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
    >
      View on GitHub
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="projects-heading" eyebrow="03 / Projects" title="Featured projects" />

        <div className="flex flex-col gap-6">
          <article
            aria-labelledby="vpc-title"
            className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgb(59_130_246/0.14),transparent_70%)]"
            />
            <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-2">
              <div className="flex min-w-0 flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">Hands-on · AWS Networking</p>
                  <h3
                    id="vpc-title"
                    className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
                  >
                    AWS VPC Infrastructure
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    A hands-on project building a custom Virtual Private Cloud on AWS, separating resources into public
                    and private subnets and configuring routing so EC2 instances can reach the internet and each other
                    as intended.
                  </p>
                </div>
                <TechList items={['AWS VPC', 'EC2', 'Networking']} />
                <Highlights
                  items={[
                    'Created public and private subnets within a custom VPC.',
                    'Attached an Internet Gateway for public subnet internet access.',
                    'Configured a NAT Gateway so private instances can make outbound connections.',
                    'Set up route tables for each subnet and verified EC2 connectivity.',
                  ]}
                />
                <div className="mt-auto pt-2">
                  <GithubLink />
                </div>
              </div>
              <div className="min-w-0">
                <VpcDiagram />
              </div>
            </div>
          </article>

          <div className="grid gap-6 lg:grid-cols-2">
            <article
              aria-labelledby="patient-order-title"
              className="flex min-w-0 flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Hands-on · CI/CD</p>
                <h3 id="patient-order-title" className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Patient Order CI/CD
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A CI/CD pipeline for a Patient Order application using GitHub Actions to automate building the
                  application into a Docker image, with integration into AWS ECR for storing container images.
                </p>
              </div>
              <TechList items={['GitHub Actions', 'Docker', 'AWS ECR']} />
              <PipelineFlow label="Pipeline flow" steps={['git push', 'GitHub Actions', 'Docker build', 'AWS ECR']} />
              <div className="mt-auto">
                <GithubLink />
              </div>
            </article>

            <article
              aria-labelledby="jenkins-title"
              className="flex min-w-0 flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Hands-on · Build Automation</p>
                <h3 id="jenkins-title" className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Jenkins Automation
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  A build automation project using Jenkins to run Maven builds for a Java application, practicing how
                  build and deployment workflows are defined and triggered in Jenkins.
                </p>
              </div>
              <TechList items={['Jenkins', 'Maven', 'Java']} />
              <PipelineFlow label="Workflow" steps={['Source (Git)', 'Jenkins job', 'Maven build', 'Deploy']} />
              <div className="mt-auto">
                <GithubLink />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
