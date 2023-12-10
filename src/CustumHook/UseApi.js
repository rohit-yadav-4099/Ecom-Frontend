import{useEffect, useState } from 'react'

const useApi = () => {

    const [data, setData] = useState([])

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("http://localhost:4099/dataapi/all");
        const json = await data.json()
        setData(json)
        
    }

  return {data}
  
}

export default useApi