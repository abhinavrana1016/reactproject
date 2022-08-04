import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();
    localStorage.clear()
    const token = localStorage.getItem('token')
    if(!token)
    {
        navigate('/login')
    }
  return (
    <div>Logout</div>
  )
}

export default Logout