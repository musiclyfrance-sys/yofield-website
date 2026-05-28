'use client'

import dynamic from 'next/dynamic'

/* Load the R3F canvas only client-side — never SSR */
const SparkFieldCanvas = dynamic(
  () => import('./SparkFieldCanvas'),
  { ssr: false }
)

export default function SparkField({ className }: { className?: string }) {
  return <SparkFieldCanvas className={className} />
}
