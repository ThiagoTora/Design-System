import { Avatar, type AvatarProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/ThiagoTora.png',
    alt: 'Thiago Torá'
},
  argTypes: {
    src: {
        control: {
            type: 'text',
        }
    }
  }

} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
    
}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}

