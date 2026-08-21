import { siteData } from "@/lib/site-data"

export function StatsCard() {
  return (
    <div className="surface flex h-full items-center p-6 sm:p-8">
      <dl className="grid w-full grid-cols-3 gap-2 sm:gap-4">
        {siteData.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index > 0
                ? "flex flex-col items-center gap-2 border-l border-border text-center"
                : "flex flex-col items-center gap-2 text-center"
            }
          >
            <dd className="text-4xl font-bold tabular-nums text-foreground sm:text-5xl">{stat.value}</dd>
            <dt className="space-y-0.5">
              <span className="block text-xs font-medium uppercase tracking-[0.1em] text-foreground/80">
                {stat.label}
              </span>
              <span className="block text-[0.6875rem] leading-tight text-muted-foreground">{stat.detail}</span>
            </dt>
          </div>
        ))}
      </dl>
    </div>
  )
}
