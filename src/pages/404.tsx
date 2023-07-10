import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => window.location.replace("/"), 5000)
  }, [])

  return <div>존재하지 않는 페이지입니다.</div>
}

export default NotFound
