import type { ReactNode } from 'react'

export function PassLayout({
  eyebrow,
  title,
  intro,
  actions,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  actions?: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <header className="desk-header">
        <div className="title">{title}</div>
        <div className="spacer" />
        {actions}
      </header>
      <div className="content">
        <div className="content-inner">
          <div className="pass-header">
            <div className="pass-eyebrow">{eyebrow}</div>
            <p>{intro}</p>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
