
import './App.css'
import Home from './Components/Home'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'

import { Link, Route, Routes, useLocation } from 'react-router-dom'

import { AiFillCaretLeft } from "react-icons/ai";


function App() {

  const {search, pathname} = useLocation()
  // console.log(pathname)


  return (
    <>
    <div className='w-screen h-screen flex relative '>

      {(pathname !="/" || search.length >0 ) &&

      <Link to="/" className='text-4xl absolute left-[15%] mb-5 top-[2%]' > <AiFillCaretLeft />
      </Link>

      }

      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path='/details/:id' element= {<Details/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        
      </Routes>


    </div>


  


     
    </>
  )
}

export default App
