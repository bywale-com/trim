import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { OverviewPage } from './pages/OverviewPage'
import { WorldPage } from './pages/WorldPage'
import { SmePage } from './pages/SmePage'
import { PersonasPage } from './pages/PersonasPage'
import { EnrichmentPage } from './pages/EnrichmentPage'
import { FurnishPage } from './pages/FurnishPage'
import { CtPlantPage } from './pages/CtPlantPage'

interface NavItem {
  to: string
  label: string
  idx?: string
  group: string
  element: React.ReactNode
  title: string
}

const NAV: NavItem[] = [
  { to: '/overview', label: 'Overview', group: 'Register', element: <OverviewPage />, title: 'Trim · Register overview' },
  { to: '/world', label: 'World', idx: '1', group: 'Passes', element: <WorldPage />, title: 'World · Trim Register' },
  { to: '/sme', label: 'SME', idx: '2', group: 'Passes', element: <SmePage />, title: 'SME · Trim Register' },
  { to: '/personas', label: 'Personas · Function', idx: '3', group: 'Passes', element: <PersonasPage />, title: 'Personas · Trim Register' },
  { to: '/enrichment', label: 'Enrichment', idx: '4', group: 'Passes', element: <EnrichmentPage />, title: 'Enrichment · Trim Register' },
  { to: '/furnish', label: 'Furnish', idx: '5', group: 'Passes', element: <FurnishPage />, title: 'Furnish · Trim Register' },
  { to: '/ct', label: 'CT Plant', idx: '6', group: 'Prototype', element: <CtPlantPage />, title: 'CT Plant · Trim Register' },
]

function groupNav(): { label: string; items: NavItem[] }[] {
  const groups: { label: string; items: NavItem[] }[] = []
  for (const item of NAV) {
    const last = groups[groups.length - 1]
    if (!last || last.label !== item.group) groups.push({ label: item.group, items: [item] })
    else last.items.push(item)
  }
  return groups
}

export default function App() {
  const groups = groupNav()
  return (
    <div className="app">
      <aside className="sidebar" aria-label="Register navigation">
        <div className="sidebar-header">
          <div className="mark">T</div>
          <div>
            <div className="brand">Trim</div>
            <div className="sub">Register workspace</div>
          </div>
        </div>
        <nav>
          {groups.map((g) => (
            <div key={g.label}>
              <div className="nav-group-label">{g.label}</div>
              {g.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {item.idx ? <span className="idx">{item.idx}</span> : null}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
          <div className="nav-group-label">Reference</div>
          <a
            className="nav-link"
            href="https://omcoda-hq.vercel.app/overview"
            target="_blank"
            rel="noreferrer"
          >
            <span>Om Coda manual ↗</span>
          </a>
        </nav>
      </aside>

      <div className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          {NAV.map((item) => (
            <Route key={item.to} path={item.to} element={item.element} />
          ))}
          <Route path="*" element={<Navigate to="/overview" replace />} />
        </Routes>
      </div>
    </div>
  )
}
