import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {setUser} from '../redux/userSlice'
import {showLoading,hideLoading} from '../redux/alertReducer'
const ProtectedRoute = (props) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);
  const getUser = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/user/getuserinfo", {
        token: localStorage.getItem("token")},
        {
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          },
        }
     
      );
if(response.data.success){
  dispatch(hideLoading())
  dispatch(setUser(response.data.userDetail))
  Navigate('/home')

}
else 
{
  localStorage.clear()
  Navigate('/login')
}
    } catch (error) {
      dispatch(hideLoading())
      localStorage.clear()
  Navigate('/login')

    }
  };
  useEffect( () => {
    if (!user) {
     getUser();
    }
  }, [user]);
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
  
};

export default ProtectedRoute;
