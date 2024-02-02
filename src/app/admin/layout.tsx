export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="border border-primary-blue">
        Aside left
    </aside>
      <div className="flex grow flex-col">
        <header className="border border-primary-purple">header</header>
        <main className="border border-primary-green">{children}</main>
      </div>
      <aside className="border border-primary-cyan">
        aside right
      </aside>
    </div>
  )
}
