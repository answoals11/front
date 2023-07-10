import { ContentHeader } from "@/components/ContentHeader"
import { StoreItem } from "@/components/StoreItem"
import { Fragment, useEffect } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { getStoreList } from "../../api/store"

export interface DataType {
  id: number
  description: string
  image: string
  name: string
  thumb: string
  url?: string
}

export default function StorePage() {
  const { data, isLoading } = useQuery("stores", getStoreList, {
    onError: (e) => {
      console.log(e)
    },
  })

  return (
    <Conatiner>
      <ContentHeader title="STORE" />
      <StoreContainer>
        <Title>STORE</Title>
        <ItemContainer>
          {isLoading ? (
            <div>Loading...</div>
          ) : data ? (
            data.map((props: DataType) => {
              return <StoreItem props={props} key={props.id} />
            })
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </ItemContainer>
      </StoreContainer>
    </Conatiner>
  )
}

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;

  margin: 100px auto 0 auto;
`
const Title = styled.h1`
  width: 1000px;
  margin: 0 auto;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;
`
