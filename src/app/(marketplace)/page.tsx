"use client"
import { useRouter } from "next/navigation"

const MarketPlacePage = () => {
    const router = useRouter()

    return (
        <body className="flex min-h-full flex-col">
            <header>header</header>
            <main className="flex grow items-center justify-center gap-2">
                <button
                    className="bg-red-400"
                    onClick={() => router.push("/admin/dashboard")}
                >
                    Admin
                </button>
                <button
                    className="bg-zinc-400"
                    onClick={() => router.push("/auth/login")}
                >
                    Login
                </button>
                <button
                    className="bg-orange-400"
                    onClick={() => router.push("/auth/register")}
                >
                    Cadastre-se
                </button>
            </main>
        </body>
    )
}

export default MarketPlacePage
