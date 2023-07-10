import { ContentHeader } from "@/components/ContentHeader"
import { styled } from "styled-components"

const AboutPage = () => {
  return (
    <Container>
      <ContentHeader title="ABOUT" />
      <Content>
        <Title>EASY & FAST!</Title>
        <div>
          맛집 리스트와 정보를 간편하게 제공해주는 AWESOME FOOD STORE 입니다.
        </div>
      </Content>
    </Container>
  )
}

export default AboutPage

const Container = styled.div`
  width: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h2`
  color: #464ea3;
  margin: 40px 0;
`
