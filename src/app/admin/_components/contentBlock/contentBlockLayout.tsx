export const ContentBlockLayout = ({
    children,
    title,
}: {
    children: React.ReactNode
    title: string
}) => {
    return (
        <section className="flex h-64 flex-col gap-4">
            <h2 className="text-xl">{title}</h2>
            <section className="flex flex-col gap-4 overflow-auto pl-2">
                {children}
            </section>
        </section>
    )
}
