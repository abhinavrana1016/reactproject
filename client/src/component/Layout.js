import React ,{useState} from "react";
import "./layout.css";
import { Link, Navigate, useLocation ,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
import { userMenu,adminMenu } from "../constant/menu.constant";
const Layout = ({ children }) => {
  const { user } = useSelector((state)=>state.user)
  const [collapsed,setCollapsed] = useState(false)
  const location = useLocation();
  const Navigate = useNavigate();
 console.log(user)
  const menuToRender = user?.isAdmin ? adminMenu:userMenu;
  return (
    <div className="main p-2">
      <div className="d-flex layout">
        <div className='sidebar'>
          <div className="siderbar-header">
           {!collapsed && 
           <h1>Stay Healthy</h1>
           }
          </div>
          <div className="menu">
            {menuToRender.map((menu) => {
              const isActive = (location.pathname === menu.path)
              return (
                <>
                  <div className={`menu-item ${isActive && 'active-menu-item'}`}>
                    <i className={menu.icon} />
                   {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                   
                  </div>
                </>
              );
            })}
           
           <div className="d-flex menu-item" onClick={()=>{
                      localStorage.clear();
                      window.location.reload()
                      Navigate("/login")
                    }}>
                    <i className= "ri-logout-circle-r-line" />
                    {!collapsed && <Link to='/login'>Logout</Link>}
                   
                  </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
          {collapsed ? (<><i class="ri-menu-line close-icon" onClick={()=>setCollapsed(false)}></i></>):(<><i className="ri-close-line close-icon" onClick={()=>setCollapsed(true)}></i></>)}
          <div className="d-flex align-items-center px-4">
          <i className="ri-notification-line close-icon px-3"></i>
          <Link to ='/profile'>{user?.name}</Link>
          </div>
           </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
