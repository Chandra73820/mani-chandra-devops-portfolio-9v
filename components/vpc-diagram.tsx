import { ArrowDown, Globe, Server, Shield } from 'lucide-react'

function Node({ label, sub, accent = false }: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-3 py-2 ${
        accent ? 'border-primary/50 bg-primary/15' : 'border-border bg-background/70'
      }`}
    >
      <Server className="size-4 shrink-0 text-primary" aria-hidden="true" />
      <div className="min-w-0">
        <p className="truncate font-mono text-xs text-foreground">{label}</p>
        {sub && <p className="truncate text-[11px] text-muted-foreground">{sub}</p>}
      </div>
    </div>
  )
}

export function VpcDiagram() {
  return (
    <figure className="rounded-xl border border-border bg-background/60 p-4 md:p-5">
      <figcaption className="mb-4 flex items-center justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Architecture overview</span>
        <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          Diagram
        </span>
      </figcaption>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2">
          <Globe className="size-4 text-primary" aria-hidden="true" />
          <span className="font-mono text-xs text-foreground">Internet</span>
        </div>
        <ArrowDown className="size-4 text-primary/70" aria-hidden="true" />
        <div className="rounded-md border border-primary/50 bg-primary/15 px-3 py-2 font-mono text-xs text-foreground">
          Internet Gateway
        </div>
        <ArrowDown className="size-4 text-primary/70" aria-hidden="true" />
      </div>

      <div className="mt-2 rounded-lg border border-dashed border-primary/40 p-3">
        <p className="mb-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
          <Shield className="size-3.5" aria-hidden="true" />
          VPC
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-3">
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">Public subnet</p>
            <div className="flex flex-col gap-2">
              <Node label="EC2" sub="Public instance" />
              <Node label="NAT Gateway" accent />
            </div>
            <p className="mt-2 font-mono text-[10px] text-muted-foreground">{'Route table → IGW'}</p>
          </div>
          <div className="rounded-md border border-border bg-card p-3">
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">Private subnet</p>
            <div className="flex flex-col gap-2">
              <Node label="EC2" sub="Private instance" />
            </div>
            <p className="mt-2 font-mono text-[10px] text-muted-foreground">{'Route table → NAT'}</p>
          </div>
        </div>
      </div>
    </figure>
  )
}
