import { styled } from '../../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginBottom: '$4',
  border: '1px solid $gray600',
  borderRadius: '$md',
  overflow: 'hidden',
})

export const LabelContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2 $4',
  background: '$gray800',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const CheckBoxInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const Schedule = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
