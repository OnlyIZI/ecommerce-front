// Components
import { HeaderAdmin } from "@/app/admin/_components/header"
import { AsideAdmin } from "./_components/asideActivity"
import { AsideMenu } from "@/app/admin/_components/asideMenu"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
        <AsideMenu />
      <div className="flex grow flex-col">
        <header className="border border-primary-purple">
          <HeaderAdmin />
        </header>
        <main className="border border-primary-green">{children}</main>
      </div>
      <aside className="w-64 border border-primary-cyan px-4 py-4 xl:w-[15%]">
        <AsideAdmin />
      </aside>
    </div>
  )
}
