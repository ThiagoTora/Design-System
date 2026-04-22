import { ArrowRight } from 'phosphor-react'
import { Button } from '../../Button'
import { StepLayout } from '../StepLayout/index.tsx'
import { TextArea } from '../../TextArea'
import { Avatar } from '../../Avatar'
import { Text } from '../../Text'
import { AvatarContainer, Container } from './styles'

export interface StepFourProps {
  onNext: () => void
  currentStep: number
  avatarSrc?: string
  avatarAlt?: string
}

export function StepFour({
  onNext,
  currentStep,
  avatarAlt,
  avatarSrc,
}: StepFourProps) {
  return (
    <StepLayout
      title="Defina sua Disponibilidade"
      description="Por último, uma breve descrição e uma foto de perfil."
      step={currentStep}
    >
      <Container>
        <Text
          css={{
            color: '$gray100',
            fontSize: '$sm',
          }}
        >
          Foto de Perfil
        </Text>

        <AvatarContainer>
          <Avatar src={avatarSrc} alt={avatarAlt} />
          <Button
            css={{
              backgroundColor: 'transparent',
              border: '2px solid $ignite300',
              color: '$ignite300',
              '&:hover': {
                backgroundColor: '$ignite700',
                color: '$white',
              },
            }}
          >
            Selecionar Foto
          </Button>
        </AvatarContainer>

        <Text
          css={{
            color: '$gray100',
            fontSize: '$sm',
          }}
        >
          Sobre Você
        </Text>

        <TextArea
          placeholder="Conte um pouco sobre você..."
          css={{
            height: '160px',
            padding: '$3 $4',
          }}
        />

        <Text
          css={{
            color: '$gray200',
            fontSize: '$sm',
          }}
        >
          Fale um pouco sobre você. Isto será exibido em sua página pessoal.
        </Text>
      </Container>
      <Button css={{ width: '100%', marginTop: '$4' }} onClick={onNext}>
        Finalizar
        <ArrowRight weight="bold" />
      </Button>
    </StepLayout>
  )
}
