import { HTMLAttributes } from "react"

interface IAccordionItem extends HTMLAttributes<HTMLDivElement> {
    label: string
}

export const AccordionItem = ({ label, ...props }: IAccordionItem) => {
    return (
        <div className="flex items-center justify-center" {...props}>
            {label}
        </div>
    )
}
