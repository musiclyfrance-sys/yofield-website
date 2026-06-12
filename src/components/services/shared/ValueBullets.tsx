import ScrollReveal from '@/components/animations/ScrollReveal'

interface ValueBulletsProps {
  promises: string[]
  title?: string
}

function CheckIcon() {
  return (
    <span
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-citron transition-transform duration-300 group-hover:scale-110"
      aria-hidden="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8L6.5 11.5L13 5"
          stroke="#0F0F0E"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export default function ValueBullets({
  promises,
  title = 'Ce que vous obtenez',
}: ValueBulletsProps) {
  return (
    <section className="section-padding bg-mist">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow mb-3 text-soil/50">Les engagements</p>
          <h2 className="np-800 mb-12 text-3xl text-soil md:text-4xl">{title}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {promises.map((promise, i) => (
            <ScrollReveal key={i} delay={0.06 * i} className="h-full">
              <div className="group flex h-full items-start gap-4 rounded-2xl bg-snow p-6 ring-1 ring-soil/[0.05] transition-all duration-300 hover:ring-soil/15 md:p-7">
                <CheckIcon />
                <p className="font-body text-base leading-relaxed text-soil">
                  {promise}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
