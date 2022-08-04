import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux';
import ProtectedRoute from './component/ProtectedRoute';
import PublicRoute from './component/PublicRoute';
import Logout from './pages/Logout';
function App() {
  const {loading} = useSelector(state=>state.alerts)
  return (
    <>
    
   <BrowserRouter>
   {loading && (
   <div className='spinner-parent'> 
   <div class="spinner-border text-dark" role="status">
</div> 
</div>)}

    <Toaster position='bottom-right' reverseOrder={false}/>
   
   <Routes>
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
    <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/logout' element={<ProtectedRoute><Logout/></ProtectedRoute>}/>

    



   </Routes>

   </BrowserRouter>
    </>
  );
}

export default App;
