/**
 * splitProse — split a long single-string paragraph into balanced
 * paragraphs at sentence boundaries, for readability. Presentation-only:
 * the data strings stay untouched. Short texts pass through unchanged.
 */
export function splitProse(text: string, parts = 2): string[] {
  const trimmed = text.trim()
  if (trimmed.length < 380) return [trimmed]

  const sentences = trimmed.match(/[^.!?]+[.!?]+(?:\s+|$)/g)
  if (!sentences || sentences.length < 2) return [trimmed]

  const target = trimmed.length / parts
  const out: string[] = []
  let buffer = ''

  for (const sentence of sentences) {
    buffer += sentence
    if (buffer.length >= target && out.length < parts - 1) {
      out.push(buffer.trim())
      buffer = ''
    }
  }
  if (buffer.trim()) out.push(buffer.trim())

  return out
}
