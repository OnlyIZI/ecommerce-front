import {
    AccordionContent,
    AccordionItem,
    AccordionProvider,
    AccordionRoot,
    AccordionTrigger,
} from "@/components/accordion"
import { Meta, StoryObj } from "@storybook/react"
import { User } from "lucide-react"

const meta = {
    title: "Components/Accordion",
    component: AccordionRoot,
    decorators: [(story) => <AccordionProvider>{story()}</AccordionProvider>],
} satisfies Meta<typeof AccordionRoot>

export default meta
type story = StoryObj<typeof AccordionRoot>

export const Empty: story = {
    render: () => <AccordionRoot></AccordionRoot>,
}

export const Icon: story = {
    render: () => (
        <AccordionRoot>
            <AccordionTrigger>
                <User className="h-4 w-4" />
                User
            </AccordionTrigger>
            <AccordionContent>
                <AccordionItem>Profile</AccordionItem>
            </AccordionContent>
        </AccordionRoot>
    ),
}
