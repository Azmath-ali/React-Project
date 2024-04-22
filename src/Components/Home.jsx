import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import {Link,useLocation} from "react-router-dom"
import { productContext } from '../utilis/Context'
import Loading from './Loading'
import axios from '../utilis/Axios'




const Home = () => {

  const [products] = useContext(productContext)

// For Filtering products...
  const {search} = useLocation()

  const category = decodeURIComponent(search.split("=")[1])


  const [filterProduct, setfilterProduct] = useState([])


  // const getCategoryProducts = ()=>{
  //   axios.get(`/products/category/${category}`)
  //   .then((res)=> setfilterProduct(res.data))
  //   .catch((err)=> console.log(err))
  // }


  useEffect(()=>{ 

    if(category =="undefined") setfilterProduct(products)
     
    else{
      // getCategoryProducts()
      setfilterProduct(products.filter((val)=> val.category == category ))
    }


  }  ,[category,products])



  return  products ? (
    <>

    <Nav/>



    <div className='w-[85%] flex flex-wrap overflow-auto py-12 '>

      {filterProduct && filterProduct.map((item, index)=> 


        <Link key={index} to={`/details/${item.id}`} className='w-[32vh] h-[42vh] m-5 overflow-hidden rounded-lg border border-black-400'>


        <div className='w-[90%] h-[80%] hover:scale-105'>
            <img className='w-full h-full object-contain ' src={item.image} alt="" />
        </div>

        <p className='text-center text-sm mt-1 hover:text-blue-500'>{item.title}</p>

        </Link>

      )}

    </div>
  </>
  )
  : <Loading/>

  
}

export default Home