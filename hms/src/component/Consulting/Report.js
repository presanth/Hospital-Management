import React, { useEffect, useState } from 'react'
import './Report.css'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Report() {

  const location = useNavigate()

  const [report,setReport] = useState('')
  const [datas,setData] = useState([])
  const params = useParams('')

  const singlePatient = async ()=>{
    const result = await axios.get('http://localhost:8000/singlepat/'+params.id)
    setData(result.data.data);    
  }

  const addReport =async (e)=>{
    e.preventDefault()
    const body ={
      id:`${datas.p_id}`,
      report
    }
    const result = await axios.post('http://localhost:8000/reportadd',body)
    alert(result.data.message);
    singlePatient()
  }

  useEffect(()=>{
    if(!localStorage.getItem("userid")){
      location('/')
    }
      singlePatient()
    
  },[])

  return (
    <div className='report-container'>
      <Nav title={'Report'} icon={<i class="fa-solid fa-pen-to-square"></i>}></Nav>
          <div className='report-box'>
            <div className='report-patient-details'>
              <p className='details-head'>Details</p>
              <p className='details-data'>{datas.p_name}</p>
              <p className='details-data'>{datas.p_address}</p>
              <p className='details-data'>{datas.p_age}</p>
              <p className='details-data'>{datas.p_contact}</p>
              <p className='details-data-head'>Previous Reports:</p>
              <div className='details-report-box'>
                {
                  datas.p_report?.map((item)=>(
                    <p className='details-data-para'> ({item.date}) <br></br> {item.report} </p>
                  ))
                }
              </div>
            </div>
            <div className='report-writing-box'>
            <p className='details-head'>Report</p>
              <textarea className='report-writting'onChange={(e)=>setReport(e.target.value)} placeholder='Enter Patient Current Situation....' />
              <button className='report-button' onClick={(e)=>addReport(e)}>Submit Report</button>
            </div>
          </div>

    </div>
  )
}

export default Report