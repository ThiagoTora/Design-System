import { X } from 'phosphor-react'
import { Button } from '../../Button'
import {
  TimePickerContainer,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

interface TimePickerProps {
  selectedDate: Date
  selectedTime?: string
  onSelectTime: (time: string) => void
  onClose: () => void
  onConfirm: () => void
}

export function TimePicker({
  selectedDate,
  selectedTime,
  onSelectTime,
  onClose,
  onConfirm,
}: TimePickerProps) {
  if (!selectedDate) {
    return null
  }

  const dayAndMonth = selectedDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
  })

  const availableTimes = [
    '09:00h',
    '10:00h',
    '11:00h',
    '12:00h',
    '13:00h',
    '14:00h',
    '15:00h',
    '16:00h',
    '17:00h',
    '18:00h',
    '19:00h',
  ]

  const unavailableTimes = ['10:00h', '14:00h', '15:00h']

  return (
    <TimePickerContainer>
      <TimePickerHeader>
        <div>
          {selectedDate.toLocaleDateString('pt-BR', {
            weekday: 'long',
          })}
          ,<span> {dayAndMonth} </span>
        </div>

        <Button variant="close" onClick={onClose}>
          <X />
        </Button>
      </TimePickerHeader>

      <TimePickerList>
        {availableTimes.map((time) => {
          const isUnavailable = unavailableTimes.includes(time)

          return (
            <TimePickerItem
              key={time}
              disabled={isUnavailable}
              onClick={() => onSelectTime(time)}
              selected={selectedTime === time}
            >
              {time}
            </TimePickerItem>
          )
        })}
      </TimePickerList>

      {selectedTime && (
        <Button
          variant="primary"
          onClick={onConfirm}
          disabled={!selectedTime}
          css={{
            marginTop: '$4',
            width: '100%',
          }}
        >
          Confirmar Agendamento
        </Button>
      )}
    </TimePickerContainer>
  )
}
