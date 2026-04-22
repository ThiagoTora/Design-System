import {
  Box,
  Button,
  Calendar,
  globalStyles,
  TextArea,
  TextInput,
} from '@ignite-ui/react'
import type { CalendarProps } from '@ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react-vite'
globalStyles()
export default {
  title: 'Form/Calendar',
  component: Calendar,
  args: {
    src: 'https://github.com/ThiagoTora.png',
    alt: 'Thiago Torá',
  },
  subcomponents: { Button, TextInput, TextArea },
  decorators: [
    (Story) => {
      return (
        <Box
          as="main"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$4',
            maxWidth: 950,
            margin: '$20 auto',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<CalendarProps>

export const Primary: StoryObj<CalendarProps> = {
  args: {},
}

export const WithDate: StoryObj<CalendarProps> = {
  args: {
    initialDate: new Date(2026, 3, 20),
  },
}

export const WithTime: StoryObj<CalendarProps> = {
  args: {
    initialDate: new Date(2026, 3, 20),
    initialTime: '09:00h',
  },
}

export const Confirm: StoryObj<CalendarProps> = {
  args: {
    initialDate: new Date(2026, 3, 20),
    initialTime: '09:00h',
    initialStep: 'confirm',
  },
}
