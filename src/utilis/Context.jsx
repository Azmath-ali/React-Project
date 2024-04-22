import { createContext, useEffect, useState } from "react"
import axios from "./Axios"

export const productContext = createContext()

const Context =  (props) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || [])


  // const getProducts = ()=>{
  //   axios.get("/products")
  //   .then((res)=> setProducts(res.data))
  //   .catch((err)=> console.log(err))
  // }

  // useEffect(()=> getProducts(), [])




  return (
    <productContext.Provider value={[products,setProducts]}>
      {props.children}

    </productContext.Provider>

  )
}

export default Context