import React from 'react'
import {Form,Input} from 'antd'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Register = () => {
    const Navigate = useNavigate();
   const handleSubmit = async(data)=>{
    try {
        const response = await axios.post('/api/user/signup',data)
    if(response.data.status===400)
    {
toast.error(response.data.message)

    }
    else{
        toast.success(response.data.message)
        toast("Navigating to Login ")
setTimeout(
Navigate('/login'),10000)

    }
    } catch (error) {
        toast.error("Something went wrong")
    }
   }
  return (
    <div className='authentication'>
        <div className='register-form card p-2'>
            <h1 className='card-title'>Good to have you with us...</h1>
       <Form layout='horizontal' onFinish={handleSubmit}>
        <Form.Item label='Name' name='name'>
            <Input placeholder='Name' className='mx-3'>

            </Input>
        </Form.Item>
        <Form.Item label='Email' name='email'>
            <Input placeholder='Email' className='mx-3'>

            </Input>
        </Form.Item>
        <Form.Item label='Mobile no' name='mobileno'>
            <Input placeholder='Mobile No....' className='mx-3'>
            </Input>
        </Form.Item>
        <Form.Item label='passowrd' name='password'>
            <Input placeholder='passowrd' className='mx-3' type='password'>
            </Input>
         </Form.Item>
         <Form.Item name="gender" label="Gender">
         <select className='mx-3 width:30px'>
           
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>

         </select>
        </Form.Item>
        <Form.Item label='Address' name='address'>
            <Input placeholder='Line 1' className='mx-3'>
            </Input>
        </Form.Item>
        <button className='primary-button my-4' htmlType="submit">Register</button>
        <Link to ='/login'>Clickk me to login</Link>
       </Form>
       </div>
</div>
  )
}

export default Register