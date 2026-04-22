import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',

  transition: 'width 0.2s ease-in-out',
})

export const AvatarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  marginBottom: '$4',
})

export const CalendarioBox = styled('div', {
  display: 'flex',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  border: '1px solid $gray600',
  boxSizing: 'border-box',
  width: 'fit-content',
  margin: '0 auto',
  marginTop: '$2',
  overflow: 'hidden',

  height: 370,
  alignItems: 'stretch',

  transition: 'all 0.2s ease-in-out',
})

// CALENDARIO

export const CalendarContainer = styled('div', {
  padding: '$6',
  width: 540,
  boxSizing: 'border-box',
  flexShrink: 0,
  backgroundColor: 'transparent',
  border: 'none',

  /* Base do calendário */
  '& .rdp': {
    margin: 0,
    color: '$gray100',
  },

  '& .rdp-month': {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  '& .rdp-caption': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    position: 'relative',
    marginTop: '$4',
    marginBottom: '$4',
    padding: 0,
  },

  /* Mês */
  '& .rdp-month_caption': {
    display: 'flex',
    margin: 0,
    fontSize: '$md',
    color: '$gray100',
  },

  '& .rdp-nav': {
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    gap: '$2',
  },

  /* Container das setas */
  '& .rdp-button_previous, & .rdp-button_next': {
    backgroundColor: '$gray800',
    border: 'none',
    width: '2rem',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',

    '&:hover': {
      backgroundColor: '$gray500',
      cursor: 'pointer',
    },

    '& svg': {
      width: '1rem',
      height: '1rem',
      fill: '$gray200',
    },

    '& .rdp-chevron': {
      fill: '$gray200',
    },
  },

  '& .rdp-button_reset': {
    appearance: 'none',
    background: 'none',
    border: 'none',
  },

  /* Grid dos dias */
  '& .rdp-month_grid': {
    borderCollapse: 'separate',
    borderSpacing: '0.25rem',
    tableLayout: 'fixed',
    width: '100%',
    marginTop: '$4',
  },

  /* Dias da semana */
  '& .rdp-weekday': {
    color: '$gray200',
    fontSize: '$xs',
    fontWeight: '$medium',
    textTransform: 'uppercase',
    paddingBottom: '$2',
  },

  /* Célula do dia */
  '& .rdp-day': {
    width: '2.5rem',
    height: '2.5rem',
    padding: 0,
  },

  /* Botão do dia */
  '& .rdp-day_button': {
    width: '100%',
    height: '100%',
    paddingTop: '$3',
    paddingBottom: '$3',
    border: 0,
    background: 'transparent',
    color: '$white',
    fontSize: '$sm',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: '8px',
    transition: 'background 0.2s',

    '&:hover:not([data-selected])': {
      backgroundColor: '$gray600',
    },
  },

  '& .rdp-day_button:disabled': {
    color: '$gray400',
    cursor: 'default',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  /* Dia selecionado */
  '& .rdp-day[data-selected] .rdp-day_button': {
    backgroundColor: '$gray600',
    color: '$white',
  },

  /* Hoje */
  '& .rdp-day_today .rdp-day_button': {
    border: '1px solid $gray500',
  },

  /* Dias fora do mês */
  '& .rdp-day_outside': {
    opacity: 0.3,
  },
})

// Tooltipo RADIX

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900 !important',
  color: '$white !important',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '$xs',
  lineHeight: 1,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35)',
  zIndex: 9999,

  '& span': {
    color: '$white',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900 !important',
})

export const ConfirmContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 540,
  margin: '0 auto',
  padding: '$6',
  boxSizing: 'border-box',
})

export const ConfirmHeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  paddingBottom: '$6',
  marginBottom: '$6',
  borderBottom: '1px solid $gray600',

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    fontWeight: '$medium',
  },

  svg: {
    color: '$ignite500',
  },
})
export const ConfirmBodyContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})
export const ConfirmFinishContainer = styled('div', {
  display: 'flex',
  justifyContent: 'right',
  marginTop: '$6',
  gap: '$4',
})

export const ToastTitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  minWidth: 320,
  strong: {
    fontWeight: '$bold',
    color: '$white',
    fontSize: '$md',
  },

  svg: {
    color: '$gray200',
    width: '$4',
    height: '$4',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$white',
    },
  },
})

export const ToastDescription = styled('span', {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
  lineHeight: '$base',
  display: 'block',
  marginTop: '$1',
})
