import { Button } from '../../Button'
import { Text } from '../../Text'
import { TextInput } from '../../TextInput'
import { StepLayout } from '../StepLayout/index.tsx'

export interface StepOneProps {
  onNext: () => void
  currentStep: number
}

export function StepOne({ onNext, currentStep }: StepOneProps) {
  return (
    <StepLayout
      title="Bem-vindo ao Ignite Call!"
      description="Precisamos de algumas informações para criar seu perfil!"
      step={currentStep}
    >
      <Text as="label">Nome do Usuário</Text>
      <TextInput prefix="cal.com/" />

      <Text as="label">Nome Completo</Text>
      <TextInput />

      <Button css={{ width: '100%' }} onClick={onNext}>
        Próximo passo
      </Button>
    </StepLayout>
  )
}
