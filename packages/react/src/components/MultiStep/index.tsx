import { Label, MultiSteContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}
export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiSteContainer>
      <Label>
        Passo
        {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiSteContainer>
  )
}

MultiStep.displayName = 'MultiStep'
