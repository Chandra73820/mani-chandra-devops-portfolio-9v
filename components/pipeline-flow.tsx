import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'

export function PipelineFlow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <ol className="flex flex-wrap items-center gap-1.5">
        {steps.map((step, i) => (
          <Fragment key={step}>
            <li className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1.5 font-mono text-xs text-foreground">
              <span className="sr-only">{`Step ${i + 1}: `}</span>
              {step}
            </li>
            {i < steps.length - 1 && (
              <ChevronRight className="size-4 text-primary/70" aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </ol>
    </div>
  )
}
