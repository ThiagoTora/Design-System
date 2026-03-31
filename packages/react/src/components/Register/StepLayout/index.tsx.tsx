import { ReactNode } from 'react'
import { Heading } from '../../Heading'
import { MultiStep } from '../../MultiStep'
import { Text } from '../../Text'
import { DescriptionContainer, InputContainer, StepContainer } from './styles'

interface StepLayoutProps {
  title: string
  description: string
  step: number
  children: ReactNode
}

export function StepLayout({
  title,
  description,
  step,
  children,
}: StepLayoutProps) {
  return (
    <StepContainer>
      <DescriptionContainer>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </DescriptionContainer>

      <MultiStep size={4} currentStep={step} />

      <InputContainer>{children}</InputContainer>
    </StepContainer>
  )
}
