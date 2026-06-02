import { NavLink, Outlet } from 'react-router';

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/d3', label: 'D3.js' },
  { to: '/canvas', label: 'Canvas' },
  { to: '/realtime', label: 'Realtime' },
];

export function RootLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center gap-6 border-b px-6">
        <span className="font-semibold">interactive-viz-lab</span>
        <nav className="flex gap-4">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
