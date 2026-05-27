'use client'

import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'p' | 'div'
  light?: boolean
}

export default function Eyebrow({
  children,
  className,
  as: Tag = 'span',
  light = false,
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'eyebrow',
        light ? 'text-snow/55' : 'text-soil/55',
        className
      )}
    >
      {children}
    </Tag>
  )
}
