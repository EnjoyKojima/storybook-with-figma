import type { Meta, StoryObj } from '@storybook/vue3'

import BaseButton from './index.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
    title: 'Base/Button',
    component: BaseButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => ({
        components: { BaseButton },
        template: `
            <BaseButton>
                ボタン
            </BaseButton>
        `,
    }),
}
