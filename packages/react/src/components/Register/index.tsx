import { ComponentProps, useState } from 'react'
import { RegisterContainer } from './styles'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'

export interface RegisterProps extends ComponentProps<
  typeof RegisterContainer
> {
  initialStep?: number
  src?: string
  alt?: string
}

export function Register({
  initialStep = 1,
  src,
  alt,
  ...props
}: RegisterProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)

  function nextStep() {
    setCurrentStep((prev) => {
      if (prev >= 4) return prev
      return prev + 1
    })
  }

  return (
    <RegisterContainer {...props}>
      {currentStep === 1 && (
        <StepOne onNext={nextStep} currentStep={currentStep} />
      )}

      {currentStep === 2 && (
        <StepTwo onNext={nextStep} currentStep={currentStep} />
      )}

      {currentStep === 3 && (
        <StepThree onNext={nextStep} currentStep={currentStep} />
      )}

      {currentStep === 4 && (
        <StepFour
          onNext={nextStep}
          currentStep={currentStep}
          avatarSrc={src}
          avatarAlt={alt}
        />
      )}
    </RegisterContainer>
  )
}

Register.displayName = 'Register'
