import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Layout from '../component/Layout'
const Home = () => {
const [userDetail,setUserDetail] = useState([])

    const getUserInfo = async()=>{
        try {
            const response = await axios.post('/api/user/getuserinfo',{},{
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            })
            setUserDetail(response.data.userDetail)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(() => {
        getUserInfo()
    }, []);
  return (
    <Layout>
       <h1>Welcome User {userDetail.name}</h1>
    </Layout>
  )
}

export default Home