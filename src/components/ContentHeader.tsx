import { styled } from "styled-components"

interface Props {
  title: string
}

export const ContentHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <TitleLine>
        <Stick />
        <Space />
        <Stick />
      </TitleLine>
    </>
  )
}

const Title = styled.h1`
  letter-spacing: 0.05em;
  padding: 0 1.75rem 2rem;
  text-transform: uppercase;
  margin: 0;

  color: #464ea3;
`

const TitleLine = styled.div`
  display: flex;
  height: 0.4rem;
  padding: 0 1.75rem;
`
const Stick = styled.div`
  background-color: #464ea3;
  flex: 1;
`
const Space = styled.div`
  width: 0.75rem;
`
