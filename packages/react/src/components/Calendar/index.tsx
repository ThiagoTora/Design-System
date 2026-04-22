import { ComponentProps, useState } from 'react'
import {
  AvatarContainer,
  CalendarContainer,
  CalendarioBox,
  ConfirmBodyContainer,
  ConfirmContainer,
  ConfirmFinishContainer,
  ConfirmHeaderContainer,
  Container,
  ToastDescription,
  ToastTitleContainer,
  TooltipArrow,
  TooltipContent,
} from './styles'
import { Avatar } from '../Avatar'
import { Text } from '../Text'
import { DayPicker, DayButton as DefaultDayButton } from 'react-day-picker'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Button } from '../Button'
import { CalendarBlank, Clock, X } from 'phosphor-react'
import { TextInput } from '../TextInput'
import { TextArea } from '../TextArea'
import { Toaster, toast } from 'sonner'
import { ptBR } from 'date-fns/locale'
import { TimePicker } from './TimePicker'

export interface CalendarProps extends ComponentProps<typeof Container> {
  src?: string
  alt?: string
}

export function Calendar({ src, alt }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [isTimeConfirmed, setIsTimeConfirmed] = useState(false)
  const isDateSelected = !!selectedDate

  const dayAndMonthAndYear = selectedDate?.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  function handleConfirmTime() {
    setIsTimeConfirmed(true)
  }

  function handleFinishAppointment() {
    setIsTimeConfirmed(false)
    setSelectedDate(undefined)
    setSelectedTime(undefined)

    toast.message(
      <ToastTitleContainer>
        <strong>Agendamento realizado</strong>
        <X onClick={() => toast.dismiss()} />
      </ToastTitleContainer>,
      {
        description: (
          <ToastDescription>
            {dayAndMonthAndYear} às {selectedTime}
          </ToastDescription>
        ),
        duration: 5000,
      },
    )
  }

  function handleCancelAppointment() {
    setIsTimeConfirmed(false)
    setSelectedDate(undefined)
    setSelectedTime(undefined)

    toast.message(
      <ToastTitleContainer>
        <strong>Agendamento Cancelado</strong>
        <X onClick={() => toast.dismiss()} />
      </ToastTitleContainer>,
      {
        description: (
          <ToastDescription>
            {dayAndMonthAndYear} às {selectedTime}
          </ToastDescription>
        ),
        duration: 5000,
      },
    )
  }

  return (
    <Container
      css={{
        maxWidth: isDateSelected ? 850 : 540,
        transition: 'max-width 0.2s ease-in-out',
        margin: '0 auto',
      }}
    >
      <Toaster
        richColors={false}
        closeButton={false}
        toastOptions={{
          style: {
            background: 'var(--colors-gray800)',
            border: '1px solid var(--colors-gray600)',
            padding: '16px',
            borderRadius: '8px',
            width: '350px',
          },
        }}
      />
      <AvatarContainer>
        <Avatar src={src} alt={alt} />
        <Text
          css={{
            fontSize: '$lg',
          }}
        >
          Thiago Torá
        </Text>
        <Text
          css={{
            fontSize: '$sm',
            color: '$gray400',
          }}
        >
          Estudante Eng. Software
        </Text>
      </AvatarContainer>
      <CalendarioBox // CONTAINER PAI
        css={{
          width: isTimeConfirmed ? 540 : isDateSelected ? 780 : 540,
          minHeight: isTimeConfirmed ? 550 : 380,

          transition: 'all 0.2s ease-in-out',
          margin: '0 auto',
          display: 'flex',
        }}
      >
        {isTimeConfirmed ? (
          <ConfirmContainer>
            <ConfirmHeaderContainer>
              <Text css={{ display: 'flex', alignItems: 'center', gap: '$2' }}>
                <CalendarBlank weight="bold" />
                {dayAndMonthAndYear}
              </Text>

              <Text css={{ display: 'flex', alignItems: 'center', gap: '$2' }}>
                <Clock weight="bold" />
                {selectedTime}
              </Text>
            </ConfirmHeaderContainer>

            <ConfirmBodyContainer>
              <label>
                <Text>Seu Nome</Text>
                <TextInput prefix="cal.com/" />
              </label>
              <label>
                <Text>Seu Email</Text>
                <TextInput />
              </label>
              <label>
                <Text>Observações</Text>
                <TextArea
                  css={{ width: '100%', height: 120, resize: 'none' }}
                />
              </label>
            </ConfirmBodyContainer>

            <ConfirmFinishContainer>
              <Button variant="secondary" onClick={handleCancelAppointment}>
                Cancelar
              </Button>
              <Button onClick={handleFinishAppointment}>Confirmar</Button>
            </ConfirmFinishContainer>
          </ConfirmContainer>
        ) : (
          <>
            <CalendarContainer>
              <Tooltip.Provider delayDuration={200}>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  locale={ptBR}
                  onSelect={(date) => {
                    if (!date) return
                    setSelectedDate(date)
                  }}
                  formatters={{
                    formatCaption: (date) => {
                      const month = date.toLocaleString('pt-BR', {
                        month: 'long',
                      })
                      const year = date.getFullYear()

                      const capitalizedMonth =
                        month.charAt(0).toUpperCase() + month.slice(1)
                      return `${capitalizedMonth} ${year}`
                    },
                  }}
                  navLayout="after"
                  disabled={{
                    from: new Date(2026, 3, 5),
                    to: new Date(2026, 3, 19),
                  }}
                  components={{
                    // INFO QUE APARECE AO SOBREPOR O MOUSE
                    DayButton: (props) => {
                      const { modifiers, day } = props
                      const isDisabled = modifiers.disabled
                      const dayNumber = day.date.getDate()
                      const monthName = day.date.toLocaleString('pt-BR', {
                        month: 'long',
                      })
                      const formattedMonth =
                        monthName.charAt(0).toUpperCase() + monthName.slice(1)
                      return (
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <div>
                              <DefaultDayButton {...props} />
                            </div>
                          </Tooltip.Trigger>

                          <Tooltip.Portal>
                            <TooltipContent sideOffset={5}>
                              {isDisabled
                                ? `${dayNumber} de ${formattedMonth} - Indisponível`
                                : `${dayNumber} de ${formattedMonth} - Disponível`}
                              <TooltipArrow />
                            </TooltipContent>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      )
                    },
                  }}
                />
              </Tooltip.Provider>
            </CalendarContainer>

            {isDateSelected && ( // CONTAINER DOS HORARIOS
              <TimePicker
                selectedDate={selectedDate!}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
                onClose={() => {
                  setSelectedDate(undefined)
                  setSelectedTime(undefined)
                }}
                onConfirm={handleConfirmTime}
              />
            )}
          </>
        )}
      </CalendarioBox>
    </Container>
  )
}
Calendar.displayName = 'Calendar'
