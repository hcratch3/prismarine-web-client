import type { Meta, StoryObj } from '@storybook/react'

import Title from './Title'

const meta: Meta<typeof Title> = {
  component: Title
}

export default meta
type Story = StoryObj<typeof Title>;

export const Primary: Story = {
  args: {
    title: [{
      text: 'New title',
    }],
    subtitle: [{
      text: 'Subtitle'
    }],
    actionBar: [{
      text: 'Action bar text'
    }],
    open: false
  }
}

export const ChangeAnimationTime: Story = {
  args: {
    title: [{
      text: 'New title',
    }],
    subtitle: [{
      text: 'Subtitle'
    }],
    actionBar: [{
      text: 'Action bar text'
    }],
    open: false,
    transitionTimes: {
      fadeIn: 2500,
      stay: 17_500,
      fadeOut: 5000
    }
  }
}

export const TitlesOnly: Story = {
  args: {
    title: [{
      text: 'New title',
    }],
    subtitle: [{
      text: 'Subtitle'
    }],
  }
}

export const ActionsOnly: Story = {
  args: {
    actionBar: [{
      text: 'Action bar text'
    }],
  }
}