import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { productContext } from '../utilis/Context'


const Nav = () => {

  const [products] = useContext(productContext)

  let distinct_category = products && products.reduce((accumulator, currentValue)=> [...accumulator, currentValue.category],[])

  distinct_category = [...new Set(distinct_category)]


  const coloring = ()=>{
    return `rgb(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()})`
  }







  return (
    <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-10'>
    <Link to="/create" className='border border-blue-700 text-blue-500 rounded-lg font-bold p-2'>
       Add New Product  
    </Link>


    <hr className='w-[80%] mt-3 border border-blue-100' />


    <h1 className='w-full text-start p-2 font-bold text-xl'> Category Filter </h1>

    <div className='w-[80%] '>

      {distinct_category.map((item, index)=>


        <Link key={index} to={`/?category=${item}`} className=' flex items-center gap-2 mb-2'>

          <span style={{backgroundColor : coloring()}} className='w-[15px] h-[15px] rounded-full'></span>
          {item}
        </Link> 
        
      )}

    </div>
      
  </nav>
  )
}

export default Nav