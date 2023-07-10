import { useRouter } from "next/router"
import styled from "styled-components"

interface Props {
  route: Array<{ route: string; name: string }>
}

export const Header: React.FC<Props> = ({ route }) => {
  const router = useRouter()

  const onChangeRoute = (route: string) => {
    router.push(route)
  }

  return (
    <Container>
      <Logo src="/Logo.png" alt="Logo" />
      <Navigator>
        {route &&
          route.map(({ route, name }) => {
            return (
              <NavigateItem onClick={() => onChangeRoute(route)}>
                {name}
              </NavigateItem>
            )
          })}
      </Navigator>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;

  padding: 0 24px;
  background-color: white;
  z-index: 1;
`

const Logo = styled.img`
  width: 250px;
`

const Navigator = styled.ul`
  list-style: none;
`
const NavigateItem = styled.li`
  width: 160px;
  float: left;

  cursor: pointer;
`
