import { useState } from 'react'
import { ArrowRight, Check } from 'phosphor-react'
import { Button } from '../../Button'
import { StepLayout } from '../StepLayout/index.tsx'
import { ContainerOption } from './styles'
import { Text } from '../../Text'

interface StepTwoProps {
  onNext: () => void
  currentStep: number
}

export function StepTwo({ onNext, currentStep }: StepTwoProps) {
  const [isConnected, setIsConnected] = useState(false)

  function handleConnectCalendar() {
    setIsConnected(true)
  }

  return (
    <StepLayout
      title="Conecte sua agenda!"
      description="Conecte o seu calendário para verificar automaticamente os horários ocupados."
      step={currentStep}
    >
      <ContainerOption>
        <Text>Google Agenda</Text>
        {isConnected ? (
          <Button
            disabled
            css={{
              backgroundColor: 'transparent',
              color: '$gray200',

              '&:disabled': {
                backgroundColor: '$gray600',
                color: '$gray200',
                cursor: 'not-allowed',
                opacity: 0.7,
              },
            }}
          >
            Conectado
            <Check weight="bold" />
          </Button>
        ) : (
          <Button
            onClick={handleConnectCalendar}
            css={{
              backgroundColor: 'transparent',
              border: '2px solid $ignite300',
              color: '$ignite300',
              '&:hover': {
                backgroundColor: '$ignite300',
                color: '$white',
              },
            }}
          >
            Conectar <ArrowRight color="$ignite300" />
          </Button>
        )}
      </ContainerOption>

      <Button
        css={{ width: '100%', marginTop: '$4' }}
        onClick={onNext}
        disabled={!isConnected}
      >
        Próximo Passo
        <ArrowRight />
      </Button>
    </StepLayout>
  )
}
