import axios from "axios"
import { useState } from "react"

export const useFetch = ( valor ) => {
  const [values, setData] = useState({
    newData: null,
    isLoading: true,
    hasError: null,
  })

  const getData = async() => {

    try {
      setData({
        ...values,
        isLoading: true
      })
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${valor}`);
      setData({
        isLoading:false,
        newData: data,
        hasError: null
      });
    
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getData,
    values,
    ...values
  }
}
