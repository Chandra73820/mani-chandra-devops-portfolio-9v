export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-primary">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  )
}
