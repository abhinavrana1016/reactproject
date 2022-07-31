import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    if(localStorage.getItem('token')){
        console.log(localStorage.getItem('token'))
        return props.children
    }
    else {
        return <Navigate to='/login'/>
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute