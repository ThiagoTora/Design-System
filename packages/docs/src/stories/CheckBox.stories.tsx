import { Box, Text, CheckBox, type CheckBoxProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box 
        as="label" 
        css={{
          display: 'flex',
          flexDirection: 'row', 
          gap: '$2'
        }}>
          {Story()}
          <Text size="sm">Accept Terms of uses</Text>
        </Box>
      )
    }
  ],
  args: {},

} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
        
}
