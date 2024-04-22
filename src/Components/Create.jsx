import React, { useContext, useState } from 'react'
import { productContext } from '../utilis/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
    const [products, setProducts] = useContext(productContext)
    const navigate = useNavigate()


    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    

    const handleFormSubmit = (e)=>{
        e.preventDefault()

        const product = {
            id:nanoid(),
            title,
            image, 
            category,
            price,
            description
        }

        setProducts([...products, product])

        localStorage.setItem("products" , JSON.stringify([...products, product]))
        toast.success("Created Successfully!!!")
        
        navigate("/")
    }



  return (
  
    <form onSubmit={handleFormSubmit} action="" className='w-screen h-screen flex flex-col items-center mt-32  '>

        <h1 className=' w-1/2 text-2xl font-bold mb-3'>Add New Product</h1>

        <input onChange={(e)=> setTitle(e.target.value)} value={title} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="text" placeholder='title' />

        <input onChange={(e)=> setImage(e.target.value)} value={image} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="url" placeholder='image'  />

        <div className='w-1/2 flex gap-7'>
            <input onChange={(e)=> setCategory(e.target.value)} value={category} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="text" placeholder='category'  />
            <input onChange={(e)=> setPrice(e.target.value)} value={price} required className='text-1xl font-bold p-2 w-[50%] bg-zinc-100 rounded-lg mb-5' type="price" placeholder='price'  />
            
        </div>

        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} required className='w-1/2 p-2 font-bold bg-zinc-100'  placeholder='Enter the product description' cols="50" rows="10"></textarea>

        <div className='w-1/2 mt-5'>
            <button className='p-2 rounded-lg  bg-cyan-300' >Add New Product</button>
        </div>    

    </form>
  

  )
}

export default Create