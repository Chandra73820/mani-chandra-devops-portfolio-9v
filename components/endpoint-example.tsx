export function EndpointExample() {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-[#0f1115]">
      <figcaption className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <span className="text-sm font-medium text-foreground">Descendant check</span>
        <span className="font-mono text-xs text-muted-foreground">example request</span>
      </figcaption>

      <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        <p className="whitespace-nowrap">
          <span className="rounded bg-primary/20 px-1.5 py-0.5 font-semibold text-primary">GET</span>{' '}
          <span className="text-foreground">/api/concepts/</span>
          <span className="text-sky-300">{'{conceptId}'}</span>
          <span className="text-foreground">/is-descendant-of/</span>
          <span className="text-sky-300">{'{ancestorId}'}</span>
        </p>

        <pre className="mt-4 text-muted-foreground">
          <code>
            <span className="text-muted-foreground/70">{'// Response 200 OK'}</span>
            {'\n{\n  '}
            <span className="text-sky-300">{'"conceptId"'}</span>
            {': "Viral pneumonia",\n  '}
            <span className="text-sky-300">{'"ancestorId"'}</span>
            {': "Clinical finding",\n  '}
            <span className="text-sky-300">{'"isDescendant"'}</span>
            {': '}
            <span className="text-primary">true</span>
            {'\n}'}
          </code>
        </pre>
      </div>
    </figure>
  )
}
