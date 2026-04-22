// HORARIOS

import { styled } from '../../../styles'

export const TimePickerContainer = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6',
  boxSizing: 'border-box',
  width: 240,
  backgroundColor: 'transparent',

  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  minHeight: 0,
  height: '100%',
})

export const TimePickerHeader = styled('div', {
  fontWeight: '$medium',
  marginBottom: '$2',
  color: '$gray100',
  textTransform: 'capitalize',
  flexShrink: 0,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    color: '$gray200',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$2',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  flex: 1,
  overflowY: 'auto',
  minHeight: 0,
  paddingRight: '$1',

  '&::-webkit-scrollbar': {
    width: '$2',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$full',
  },
})

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  padding: '$3',
  cursor: 'pointer',
  color: '$gray100',
  borderRadius: '$sm',
  fontSize: '$sm',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$ignite500',
        color: '$white',
        cursor: 'default',

        '&:hover': {
          backgroundColor: '$ignite500',
        },
      },
    },
  },
})
