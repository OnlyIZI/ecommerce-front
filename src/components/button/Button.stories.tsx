import { Button } from "@/components/button"
import { Meta, StoryObj } from "@storybook/react"
import { CodeSquare } from "lucide-react"

const meta = {
    title: "Components/Button",
    component: Button,
} satisfies Meta<typeof Button>

export default meta
type story = StoryObj<typeof Button>

export const Default: story = {
    args: {
        variant: "default",
        size: "default",
        children: "button",
    },
    argTypes: {
        variant: {
            options: ["default", "secondary"],
            control: {
                type: "inline-radio",
            },
        },
        size: {
            option: ["default", "large"],
            control: {
                type: "inline-radio",
            },
        },
    },
    render: () => (
        <section className="flex gap-4">
            <div className="flex flex-col gap-2">
                <Button variant="default">
                    <CodeSquare className="h-4 w-4" />
                    Default variant
                </Button>
                <Button variant="secondary">
                    <CodeSquare className="h-4 w-4" />
                    Primary variant
                </Button>
            </div>
            <div className="flex flex-col gap-2">
                <Button size="default">Default size</Button>
                <Button size="large">Large size</Button>
            </div>
        </section>
    ),
}

export const Disabled: story = {
    args: {
        variant: "default",
        children: "button",
    },
    argTypes: {
        size: {
            options: ["default", "secondary"],
            control: {
                type: "inline-radio",
            },
        },
        asChild: {
            control: {
                type: "",
            },
        },
    },
    render: () => (
        <div className="flex flex-col gap-2">
            <Button disabled>Disabled</Button>
        </div>
    ),
}
