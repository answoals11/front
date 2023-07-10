import { Button as AntdButton } from "antd"
import { useRouter } from "next/router"
import styled from "styled-components"

export default function Home() {
  const router = useRouter()
  return (
    <Container>
      <Background src="/Restaurant.png" alt="restaurant" />
      <Button onClick={() => router.push("/store")}>맛집 찾아보기</Button>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Background = styled.img`
  width: 100%;
`
const Button = styled(AntdButton)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 40px;
`
