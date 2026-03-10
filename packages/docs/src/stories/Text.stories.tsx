import { Text, type TextProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'TypoGraphy/Text',
  component: Text,
  args: {
    children: 'Example Text',
    size: 'md',
  },
  argTypes: {
    sizet: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '9xl', '9xl'],
      control: {
        type: 'inline-radio',
      }
    }
  }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
      children: 'Strong Text',
      as: 'strong'
    }
}

