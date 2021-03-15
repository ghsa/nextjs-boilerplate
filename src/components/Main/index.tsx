import * as S from './styles';

const Main = ({
  title = 'Next Boilerplate'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="https://diariodoprogramadortda.files.wordpress.com/2018/01/cropped-logo_wordpress.png" alt="Gustavo Andrade logo" />
      <S.Title>
        {title}
      </S.Title>
    </S.Wrapper>
  )
}

export default Main;
