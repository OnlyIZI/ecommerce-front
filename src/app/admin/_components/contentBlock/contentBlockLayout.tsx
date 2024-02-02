
export const ContentBlockLayout = ({children, title}:{children: React.ReactNode, title: string}) => {

  return (
    <section className="flex flex-col gap-4 h-64">
      <h2 className="text-xl">{title}</h2>
      <section className="flex flex-col gap-4 pl-2 overflow-auto">{children}</section>
    </section>
  )
}
