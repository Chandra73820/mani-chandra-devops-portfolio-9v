import { SectionHeading } from './section-heading'

const focusAreas = [
  { title: 'Linux administration', text: 'Working on the command line, managing services, and scripting with Bash.' },
  { title: 'Cloud infrastructure', text: 'Configuring AWS networking and compute with VPC, EC2, IAM, and S3.' },
  { title: 'Automation & CI/CD', text: 'Building and deploying with Jenkins, Maven, Docker, and GitHub Actions.' },
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
              {', an aspiring Linux and DevOps Engineer. I enjoy understanding how systems fit together — from the operating system and network up to the pipeline that builds and ships an application. '}
              <span className="text-foreground">
                {"I'm especially interested in Linux administration, AWS cloud infrastructure, and DevOps automation."}
              </span>
            </p>
            <p>
              {'My hands-on work centers on '}
              <span className="text-foreground">Linux administration</span>
              {' and '}
              <span className="text-foreground">AWS cloud infrastructure</span>
              {', including designing a VPC with public and private subnets and configuring routing so EC2 instances can communicate as intended.'}
            </p>
            <p>
              {'I also build '}
              <span className="text-foreground">automation and CI/CD</span>
              {' workflows — using Jenkins with Maven for Java builds, and GitHub Actions with Docker for containerized deployments — while keeping everything under version control with Git and GitHub.'}
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
