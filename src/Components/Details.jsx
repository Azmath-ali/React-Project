import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utilis/Axios'
import Loading from './Loading'
import { productContext } from '../utilis/Context'
import { toast } from 'react-toastify'

const Details = () => {

  const [products, setProducts] = useContext(productContext)

  const [product, setProduct] = useState(null)
  const {id} = useParams()

  const navigate = useNavigate()


  // const getsingleProduct = ()=>{

  //   axios.get(`/products/${id}`)
  //   .then((res)=> setProduct(res.data))
  //   .catch((err)=> console.log(err))
  // }


  useEffect(()=>{
    // getsingleProduct()
    if(!product){
      setProduct(products.filter((val)=> val.id == id)[0])
    }
  }, [])



  const productDelete= (id)=>{
    const deletedProduct = products.filter((val)=> val.id != id)
    setProducts(deletedProduct)

    localStorage.setItem("products", JSON.stringify(deletedProduct))

    toast.error("Deleted Successfully!!!")
    navigate("/")

  }


  
  return ( product ?
    

    <div className='w-[80%] m-auto flex justify-center items-center gap-36 '>


        <div className='w-[28%]' >
        <img className='w-full h-full object-cover' src={`${product.image}`} alt="" />
        </div>

        <div className='w-[42%]'>

          <h1 className='font-bold text-3xl mb-4'>{product.title}</h1>

          <h2 className='text-zinc-400 mb-5'> {product.category} </h2>

          <h3 className='text-red-500 mb-5'> $ {product.price} </h3>

          <h4 className='mb-7'> {product.description} </h4>

          <Link to={`/edit/${product.id}`} className='border border-blue-300 px-2 py-1.5 rounded-sm text-blue-500 mr-5'> Edit </Link>

          <button onClick={()=> productDelete(product.id)} className='border border-red-300 px-2 py-1.5 rounded-sm text-red-500'> Delete </button>

        </div>


    </div>
    
    
    
    : <Loading/>
  )
}

export default Details