import { LuChevronRight } from "react-icons/lu"

interface IAccordion {
    children?: React.ReactNode
    icon?: React.ReactNode
    label?: string
}

export const AccordionRoot = ({ children, label, icon }: IAccordion) => {
    return (
        <div className="flex w-full flex-col">
            <div className="flex items-center gap-1">
                <LuChevronRight className="h-4 w-4" />
                {icon}
                <h3>{label}</h3>
            </div>
            <div>{children}</div>
        </div>
    )
}
