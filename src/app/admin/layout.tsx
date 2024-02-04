// Components
import { HeaderAdmin } from "@/app/admin/_components/header"
import { AsideActivity } from "./_components/asideActivity"
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
                <HeaderAdmin />
                <main>{children}</main>
            </div>
            <aside className="border border-primary-default">
                <AsideActivity />
            </aside>
        </div>
    )
}
