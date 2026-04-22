import { Box, Register, type RegisterProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react-vite'

export default {
  title: 'Form/Register',
  component: Register,
  args: {
    src: 'https://github.com/ThiagoTora.png',
    alt: 'Thiago Torá',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="main"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$4',
            maxWidth: 572,
            margin: '$20 auto',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<RegisterProps>

export const Primary: StoryObj<RegisterProps> = {
  args: {
    initialStep: 1,
  },
}

export const Step2: StoryObj<RegisterProps> = {
  args: {
    initialStep: 2,
  },
}

export const Step3: StoryObj<RegisterProps> = {
  args: {
    initialStep: 3,
  },
}

export const Step4: StoryObj<RegisterProps> = {
  args: {
    initialStep: 4,
  },
}

export const NoAvatar: StoryObj<RegisterProps> = {
  args: {
    src: undefined,
    initialStep: 4,
  },
}
