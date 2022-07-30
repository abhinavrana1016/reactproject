import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <>
   <BrowserRouter>
   <Toaster position='bottom-right' reverseOrder={false}/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;