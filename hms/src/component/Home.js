import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from './Navbar/Nav'


function Home() {

const [id,setId]=useState('')
const [pass,setPassword]=useState('')

const [er,setError] = useState('')

const location = useNavigate()

  const userLogin = async (e)=>{
    e.preventDefault()
    const body={
      id,
      pass
    }
    try{
      const result = await axios.post('http://localhost:8000/userlogin',body)
      if(result.data.user.type == 'doctor'){
        localStorage.setItem("userid",JSON.stringify(result.data.user.hospital_id))
        localStorage.setItem("username",JSON.stringify(result.data.user.ename))
        alert(result.data.message);
        location('consulting/:name')
      }else{
        localStorage.setItem("userid",JSON.stringify(result.data.user.hospital_id))
        localStorage.setItem("username",JSON.stringify(result.data.user.ename))
        alert(result.data.message);
        location('reception')
      }
    }catch(error){
      setError(error.response.data.message)
    }

  }

  return (
    <div className='home-container'>
        <Nav icon={<i class="fa-regular fa-hospital"></i>} title={'Hospital Management System'} />
        <div className='login-box'>
          <h2 className='login-title'>Login</h2>
          <div className='userid-box'>
            <input type="text" className='login-input' placeholder='Hospital Id' onChange={(e)=>setId(e.target.value)} />
          </div>
          <div className='userpass-box'>
            <input type="password" className='login-input' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <p className='errorbox'>{er}</p>
          <button className='login-button' onClick={(e)=>userLogin(e)}>Login</button>
        </div>
    </div>
  )
}

export default Home