import styled from "styled-components"
import { DataType } from "@/pages/store"
import { useState } from "react"
import { Modal } from "antd"
import { useQuery } from "react-query"
import { getStoreItem } from "@/api/store"

interface Props {
  props: DataType
}

export const StoreItem: React.FC<Props> = ({ props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data, isLoading } = useQuery(
    "storeItem",
    () => getStoreItem(props.id),
    {
      onError: (e) => {
        console.log(e)
      },
      enabled: isOpen,
    }
  )

  const onOpen = () => {
    setIsOpen(true)
  }

  const onCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Container onClick={onOpen}>
        <Image src={props.thumb} alt="img" />
      </Container>
      {data && !isLoading && (
        <AntdModal open={isOpen} onCancel={onCancel} footer={null} width="95%">
          <ImageContainer>
            <MainImage src={data[0].image} alt="img" />
          </ImageContainer>
          <InfoContainer>
            <Title>{data[0].name}</Title>
            <Content>
              <div>{data[0].description}</div>
              {data[0].url && (
                <URL>
                  <a href={data[0].url} target="_blank">
                    홈페이지 바로가기
                  </a>
                </URL>
              )}
            </Content>
          </InfoContainer>
        </AntdModal>
      )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  height: 180px;
  padding: 12px;
`
const Image = styled.img`
  height: auto;
  border-radius: 8px;
  cursor: pointer;
`
const AntdModal = styled(Modal)`
  min-width: 1024px;
  top: 15px;

  .ant-modal-content {
    padding: 0;
    overflow: hidden;
  }
  .ant-modal-body {
    display: flex;
  }
`
const ImageContainer = styled.div`
  width: 50%;
  height: 717px;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 80px;

  box-sizing: border-box;
`
const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Title = styled.div`
  font-size: 40px;
`
const Content = styled.div`
  white-space: pre-line;
`
const URL = styled.div`
  margin-top: 60px;
`
