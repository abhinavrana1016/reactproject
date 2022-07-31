import React,{useEffect} from 'react'
import axios from 'axios'
import Layout from '../component/Layout'
const Home = () => {

    const getUserInfo = async()=>{
        try {
            const response = await axios.post('/api/user/getuserinfo',{},{
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(() => {
        getUserInfo()
    }, []);
  return (
    <Layout>
       <h1>kbk</h1>
    </Layout>
  )
}

export default Home