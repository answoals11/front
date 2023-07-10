import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
})

export const getStoreList = async () => {
  const data = await axiosInstance.get("/stores")
  return data.data
}

export const getStoreItem = async (id: number) => {
  const data = await axiosInstance.get("/stores", { params: { id } })
  return data.data
}
