import{useEffect, useState } from 'react'

const useApi = () => {

    const [data, setData] = useState([])

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://ecommerce-e8kj.onrender.com/dataapi/all");
        const json = await data.json()
        setData(json)
        
    }

  return {data}
  
}

export default useApi
