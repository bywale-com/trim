import type { ReactNode } from 'react'

/**
 * SurfaceBoundary — the Live-surface-map lens made visible. Wraps a planted region and
 * names it (Console / SurfaceBoundary). In Register gray this is a labelled dashed frame,
 * never design-system chrome.
 */
export function SurfaceBoundary({
  surfaceId,
  label,
  region,
  children,
}: {
  surfaceId: string
  label: string
  region: string
  children: ReactNode
}) {
  return (
    <section
      className="surface-boundary"
      data-surface-id={surfaceId}
      aria-label={`${label} surface`}
    >
      <header className="surface-boundary__label">
        <span className="mono">{label}</span>
        <span className="muted small">{region}</span>
      </header>
      <div className="surface-boundary__body">{children}</div>
    </section>
  )
}
