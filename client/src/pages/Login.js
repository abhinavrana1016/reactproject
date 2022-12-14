import React from 'react'
import {Form,Input} from 'antd'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useSelector,useDispatch} from 'react-redux'
import { hideLoading, showLoading } from '../redux/alertReducer'
const Login = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate();
  const handleSubmit = async(data)=>{
    try {
      dispatch(showLoading())
        const response = await axios.post('/api/user/login',data)
   dispatch(hideLoading())
        if(response.data.status===400)
   {
    toast.error(response.data.message)
   }
   else{
    toast.success(response.data.message)
    localStorage.setItem("token",response.data.token)
    Navigate('/home')
   }
    } catch (error) {
   dispatch(hideLoading())

        toast.error("Something went wrong")
    }
   }
  return (
    <div className='authentication'>
        <div className='register-form card p-2'>
            <h1 className='card-title-login'>Login</h1>
       <Form layout='horizontal' onFinish={handleSubmit}>
       
        <Form.Item label='Email' name='email'>
            <Input placeholder='Email' className='mx-3'>

            </Input>
        </Form.Item>
       
        <Form.Item label='passowrd' name='password'>
            <Input placeholder='passowrd' className='mx-3' type='password'>
            </Input>
         </Form.Item>
         
        <button className='primary-button my-4' htmlType="submit">Login</button>
        <Link to ='/register'>Clickk me to Register</Link>
       </Form>
       </div>
</div>
  )
}

export default Login