import { styled } from '../../../styles'

export const StepContainer = styled('div', {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const DescriptionContainer = styled('div', {
  marginBottom: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const InputContainer = styled('div', {
  backgroundColor: '$gray800',
  borderRadius: '$md',
  padding: '$6',
  border: '1px solid $gray600',
  marginTop: '$4',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
