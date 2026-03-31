import { ArrowRight } from 'phosphor-react'
import { Button } from '../../Button'
import { CheckBox } from '../../CheckBox'
import { StepLayout } from '../StepLayout/index.tsx'
import { Text } from '../../Text'
import { TextArea } from '../../TextArea'
import { CheckBoxInfo, LabelContainer, Schedule, Container } from './styles'
import { useState } from 'react'

export interface StepThreeProps {
  onNext: () => void
  currentStep: number
}

const daysOfWeek = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
]

export function StepThree({ onNext, currentStep }: StepThreeProps) {
  const [selectedDays, setSelectedDays] = useState<number[]>([])

  function handleToggleDay(dayIndex: number) {
    if (selectedDays.includes(dayIndex)) {
      setSelectedDays(selectedDays.filter((index) => index !== dayIndex))
    } else {
      setSelectedDays([...selectedDays, dayIndex])
    }
  }

  const isButtonDisabled = selectedDays.length === 0

  return (
    <StepLayout
      title="Quase lá!"
      description="Defina o intervalo de horários que você está disponível em cada dia da semana."
      step={currentStep}
    >
      <Container>
        {daysOfWeek.map((day, index) => {
          const isChecked = selectedDays.includes(index)

          return (
            <LabelContainer key={day}>
              <CheckBoxInfo>
                <CheckBox
                  checked={isChecked}
                  onCheckedChange={() => handleToggleDay(index)}
                />
                <Text size="sm">{day}</Text>
              </CheckBoxInfo>

              <Schedule>
                <TextArea
                  placeholder="00:00h"
                  disabled={!isChecked}
                  css={{
                    width: '80px',
                    height: '38px',
                    minHeight: 'unset',
                    padding: '8px',
                    textAlign: 'center',
                    opacity: isChecked ? 1 : 0.4,
                    resize: 'none',
                  }}
                />

                <TextArea
                  placeholder="00:00h"
                  disabled={!isChecked}
                  css={{
                    width: '80px',
                    height: '38px',
                    minHeight: 'unset',
                    padding: '8px',
                    textAlign: 'center',
                    opacity: isChecked ? 1 : 0.4,
                    resize: 'none',
                  }}
                />
              </Schedule>
            </LabelContainer>
          )
        })}
      </Container>

      <Button
        css={{ width: '100%', marginTop: '$4' }}
        onClick={onNext}
        disabled={isButtonDisabled}
      >
        Próximo Passo
        <ArrowRight weight="bold" />
      </Button>
    </StepLayout>
  )
}
