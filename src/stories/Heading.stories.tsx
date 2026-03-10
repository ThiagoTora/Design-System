import { Heading, type HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from "@storybook/react-vite"

export default {
  title: 'TypoGraphy/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
    },
    argTypes: {
        sizet: {
        options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
        control: {
            type: 'inline-radio',
        }
        }
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = { }

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
      children: 'H1 Heading',
      as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre sera um `H2`, mas podemos alterar isso com a propriedade `as`.',
            }
        }
    }
}

