import { Box, Text, TextInput, type TextInputProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'TypoGraphy/TextInput',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box 
        as="label" 
        css={{
          display: 'flex',
          flexDirection: 'column', 
          gap: '$2'
        }}>
          <Text size="sm">Email Address</Text>
          {Story()}
        </Box>
      )
    }
  ],
  args: {},

} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
      placeholder: 'Type your name'
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
      disabled: true,
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
      prefix: 'cal.com/',
    }
}


