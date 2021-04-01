import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
