interface ValueBulletsProps {
  promises: string[]
  title?: string
}

function CheckIcon() {
  return (
    <span
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-citron"
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
        <h2 className="np-700 mb-12 text-3xl text-soil">{title}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {promises.map((promise, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-snow p-6"
            >
              <CheckIcon />
              <p className="font-body text-base leading-relaxed text-soil">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
