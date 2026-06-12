/**
 * ScrollMarquee — constant-speed seamless marquee of the 5 pillars.
 * ─────────────────────────────────────────────────────────────────
 * Pure CSS loop (translateX 0 → -50% on a doubled track) → continuous,
 * never resets visibly, and is NOT coupled to scroll (no stop / speed-up
 * when scrolling). overflow-x-clip + generous line-height so descenders
 * (the "g" in Branding) are never cut.
 */

const ITEMS = [
  { num: '01', label: 'Branding & Identité' },
  { num: '02', label: 'Sites & Applications' },
  { num: '03', label: 'Acquisition' },
  { num: '04', label: 'Contenus' },
  { num: '05', label: 'IA & Automatisation' },
]

const DOUBLED = [...ITEMS, ...ITEMS]

export default function ScrollMarquee() {
  return (
    <section
      className="overflow-x-clip py-12 md:py-16"
      style={{ borderTop: '0.5px solid rgba(15,15,14,0.08)', borderBottom: '0.5px solid rgba(15,15,14,0.08)' }}
      aria-hidden="true"
    >
      <div className="flex w-max items-center whitespace-nowrap animate-[marquee_36s_linear_infinite] will-change-transform">
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex flex-shrink-0 items-baseline gap-4 px-8 md:px-14">
            <span className="np-800 text-4xl leading-[1.25] text-soil md:text-6xl">{item.label}</span>
            <span className="ml-4 text-2xl text-soil/20">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}
