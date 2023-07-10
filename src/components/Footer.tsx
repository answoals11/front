import { styled } from "styled-components"

export const Footer = () => {
  return (
    <Container>
      <FooterLine />
      <Address>서울특별시 광진구 아차산로200</Address>
      <div>
        <FooterInfo>
          <FooterInfoItem>
            코오롱인더스트리(주)FnC부문 커먼그라운드
          </FooterInfoItem>
          <FooterInfoItem>대표이사: 유석진</FooterInfoItem>
          <FooterInfoItem>법인등록번호: 321-85-00020</FooterInfoItem>
          <FooterInfoItem>서울특별시 강남구 삼성로 518 (삼성동)</FooterInfoItem>
        </FooterInfo>
      </div>
      <Copyright>@2020 문재민</Copyright>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;

  padding: 24px;
  margin-top: 60px;

  font-size: 12px;
  box-sizing: border-box;
`
const FooterLine = styled.div`
  height: 0.5rem;
  background-color: #eeeeee;
`
const FooterInfo = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const FooterInfoItem = styled.li`
  color: #868e96;
  float: left;

  &:after {
    content: "";
    display: inline-block;
    height: 0.8rem;
    margin: 0 0.5rem;
    vertical-align: top;
    width: 1px;
    background-color: #dee2e6;
  }
  &:last-child:after {
    content: none;
  }
`
const Address = styled.div`
  padding: 3rem 0 1rem;
`
const Copyright = styled.div`
  padding-top: 3.75rem;
  color: #868e96;
`
