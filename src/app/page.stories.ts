import type { Meta, StoryObj } from "@storybook/react"

import Home from "./page"

const meta = {
  title: "home/Page",
  component: Home,
  parameters: {
    // https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
