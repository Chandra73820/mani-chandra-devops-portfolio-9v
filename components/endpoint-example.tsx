const ENDPOINT_PATH = '/api/Hierarchy/is-descendant'

const queryParameters = [
  { name: 'system', description: 'Code system of the concepts' },
  { name: 'version', description: 'Version of the code system' },
  { name: 'parentCode', description: 'Code of the potential ancestor concept' },
  { name: 'childCode', description: 'Code of the potential descendant concept' },
]

const exampleQuery = [
  { name: 'system', value: 'SNOMED%20CT' },
  { name: 'version', value: 'Sample-2026' },
  { name: 'parentCode', value: '73211009' },
  { name: 'childCode', value: '44054006' },
]

function MethodBadge() {
  return <span className="rounded bg-primary/20 px-1.5 py-0.5 font-semibold text-primary">GET</span>
}

function ExampleLabel({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  )
}

export function EndpointExample() {
  return (
    <figure
      aria-labelledby="endpoint-title"
      className="overflow-hidden rounded-xl border border-border bg-[#0f1115]"
    >
      <figcaption className="border-b border-border px-4 py-3">
        <span id="endpoint-title" className="text-sm font-medium text-foreground">
          Descendant check endpoint
        </span>
        <p className="mt-2 overflow-x-auto whitespace-nowrap font-mono text-[13px]">
          <MethodBadge /> <span className="text-foreground">{ENDPOINT_PATH}</span>
        </p>
      </figcaption>

      <div className="border-b border-border px-4 py-4">
        <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Query parameters</h5>
        <dl className="mt-3 flex flex-col gap-2">
          {queryParameters.map(({ name, description }) => (
            <div key={name} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <dt className="shrink-0 font-mono text-[13px] text-sky-300 sm:w-24">{name}</dt>
              <dd className="text-sm text-muted-foreground">{description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-b border-border px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Request</h5>
          <ExampleLabel>Example</ExampleLabel>
        </div>
        <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-relaxed">
          <code>
            <MethodBadge /> <span className="text-foreground">{ENDPOINT_PATH}</span>
            {exampleQuery.map(({ name, value }, index) => (
              <span key={name}>
                {'\n  '}
                <span className="text-muted-foreground">{index === 0 ? '?' : '&'}</span>
                <span className="text-sky-300">{name}</span>
                <span className="text-muted-foreground">=</span>
                <span className="text-foreground">{value}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>

      <div className="px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Response</h5>
          <ExampleLabel>Example</ExampleLabel>
        </div>
        <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-relaxed text-muted-foreground">
          <code>
            {'{\n  '}
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
