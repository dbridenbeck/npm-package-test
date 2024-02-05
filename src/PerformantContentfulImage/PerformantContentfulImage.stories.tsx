import type { Meta, StoryObj } from '@storybook/react';

import { PerformantContentfulImage } from './PerformantContentfulImage';

const meta = {
  title: 'Example/PerformantContentfulImage',
  component: PerformantContentfulImage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PerformantContentfulImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {};