import { Loading } from "@/components/loading"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
    title: "Components/loading",
    component: Loading,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: {
                type: "inline-radio",
            },
        },
    },
} satisfies Meta<typeof Loading>

export default meta
type story = StoryObj<typeof Loading>

export const Small: story = {
    args: {
        size: "sm",
    },
}

export const Medium: story = {
    args: {
        size: "md",
    },
}

export const large: story = {
    args: {
        size: "lg",
    },
}

export const ExtraLarge: story = {
    args: {
        size: "xl",
    },
}
