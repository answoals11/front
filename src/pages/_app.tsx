import { Header } from "@/components/Header"
import type { AppProps } from "next/app"
import styled from "styled-components"
import "@/styles/globalStyle.css"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Footer } from "@/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const route = [
    { route: "about", name: "ABOUT" },
    { route: "store", name: "STORE" },
  ]
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header route={route} />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </QueryClientProvider>
  )
}

const Layout = styled.div`
  padding-top: 94px;
`
