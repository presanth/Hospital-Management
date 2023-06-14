import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav({title,icon}) {
  const location = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("userid")
    location('/')
  }
  return (
    <div className='reception-nav'>
        <h1 className='nav-title'>{icon}{title}</h1>
        <button className='logbutton' onClick={(e)=>logout()}>LogOut</button>
    </div>
  )
}

export default Nav