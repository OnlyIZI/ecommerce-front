"use client";
import { useState } from "react";

// Components
import { HeaderAdmin } from "@/app/admin/_components/header";
import { AsideAdmin } from "./_components/aside";

// Framer Motion
import { motion } from "framer-motion";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <aside className="border border-primary-blue">Aside left</aside>
      <div className="flex grow flex-col">
        <header className="border border-primary-purple">
          <HeaderAdmin />
        </header>
        <main className="border border-primary-green">{children}</main>
      </div>
      <aside className="border border-primary-cyan py-4 px-4 w-64 xl:w-[15%]">
        <AsideAdmin />
      </aside>
    </div>
  )
}
