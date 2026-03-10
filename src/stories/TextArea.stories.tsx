import { Box, Text, TextArea, type TextAreaProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'TypoGraphy/TextArea',
  component: TextArea,
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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    }
  ],
  args: {},

} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
      placeholder: 'Add any observation...'
    },
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
      disabled: true,
    },
}
