import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../utilis/Context'
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {
    const [products, setProducts] = useContext(productContext)
    const navigate = useNavigate()
    const {id} = useParams()

    const [product, setProduct] = useState({

        title:"",
        image:"",
        category:"",
        price:"",
        description:""
    })
    
    const changeHandler = (e)=>{
        setProduct({...product, [e.target.name]: e.target.value})

    }
    useEffect(()=>{
        setProduct(products.filter((val)=> val.id == id)[0])

    }, [id])



    const handleFormSubmit = (e)=>{
        e.preventDefault()

        const pi = products.findIndex((val)=> val.id == id)
        
        const copyData = [...products]

        copyData[pi] = {...products[pi], ...product}

        setProducts(copyData)



        localStorage.setItem("products" , JSON.stringify(copyData))

        toast.success("Edited Successfully!!!")
        
        navigate(-1)
    }



  return (
  
    <form onSubmit={handleFormSubmit} action="" className='w-screen h-screen flex flex-col items-center mt-32  '>

        <h1 className=' w-1/2 text-2xl font-bold mb-3'>Add New Product</h1>

        <input onChange={changeHandler} name='title' value={product && product.title} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="text" placeholder='title' />

        <input onChange={changeHandler} name='image' value={product && product.image} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="url" placeholder='image'  />

        <div className='w-1/2 flex gap-7'>
            <input onChange={changeHandler} name='category' value={product && product.category} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="text" placeholder='category'  />
            <input onChange={changeHandler} name='price' value={product && product.price} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="number" placeholder='price'  />
            
        </div>

        <textarea onChange={changeHandler} name='description' value={product && product.description} required className='w-1/2 p-2 font-bold bg-zinc-100'  placeholder='Enter the product description' cols="50" rows="10"></textarea>

        <div className='w-1/2 mt-5'>
            <button className='p-2 rounded-lg  bg-cyan-300' >Edit Product</button>
        </div>    

    </form>
  

  )
}

export default Edit