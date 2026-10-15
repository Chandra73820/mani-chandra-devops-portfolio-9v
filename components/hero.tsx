import { ArrowRight } from 'lucide-react'
import { GithubIcon } from './github-icon'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgb(59_130_246/0.22),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          .NET · C# · SQL Server
        </p>

        <h1
          id="hero-heading"
          className="mt-6 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Mani Chandra{' '}
          <span className="bg-gradient-to-r from-primary to-sky-300 bg-clip-text text-transparent">
            Edara
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"I'm a developer who builds backend services and REST APIs with .NET, C#, and SQL Server. My featured work is a Clinical Terminology Service API that models medical concept hierarchies."}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
          >
            View featured project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Chandra73820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-secondary/60 px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
          >
            <GithubIcon className="size-4" />
            GitHub profile
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
