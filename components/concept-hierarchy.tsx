const levels = [
  { label: 'Clinical finding', role: 'Ancestor' },
  { label: 'Disorder of respiratory system', role: null },
  { label: 'Pneumonia', role: null },
  { label: 'Viral pneumonia', role: 'Descendant' },
]

export function ConceptHierarchy() {
  return (
    <figure className="rounded-xl border border-border bg-background/70 p-5">
      <figcaption className="mb-4 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-foreground">Concept hierarchy</span>
        <span className="font-mono text-xs text-muted-foreground">illustrative</span>
      </figcaption>

      <ol className="space-y-2">
        {levels.map((level, i) => {
          const highlighted = level.role !== null
          return (
            <li key={level.label} style={{ paddingLeft: `${i * 1.25}rem` }}>
              <div className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="font-mono text-sm text-primary/60">
                    {'└─'}
                  </span>
                )}
                <span
                  className={
                    highlighted
                      ? 'rounded-md border border-primary/50 bg-primary/15 px-2.5 py-1 text-sm text-foreground'
                      : 'rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-muted-foreground'
                  }
                >
                  {level.label}
                </span>
                {level.role && (
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{level.role}</span>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </figure>
  )
}
