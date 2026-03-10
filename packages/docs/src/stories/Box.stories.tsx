import { Box, type BoxProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text> Testando o elemento Box</Text>      
  },
  argTypes: {
    children: {
        type: null,
    }
  }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}

