import { HeaderAdmin } from "@/app/admin/_components/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background flex min-h-screen w-full">
      <aside className="border-border border">Aside left</aside>
      <div className="flex grow flex-col">
        <header className="border-border border">
          <HeaderAdmin />
        </header>
        <main className="border-border border">{children}</main>
      </div>
      <aside className="border-border border">aside right</aside>
    </div>
  )
}
