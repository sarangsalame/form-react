import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

  return (
    <>
    <nav>
        <h1>Home Page</h1>
        <div>
            <button 
            onClick={()=>{
                navigate("/login")
            }}
            >Login/Signup</button>
        </div>
    </nav>
    
    </>
  )
}

export default Home