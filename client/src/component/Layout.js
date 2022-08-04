import React ,{useState} from "react";
import "./layout.css";
import { Link, Navigate, useLocation ,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
const Layout = ({ children }) => {
  const { user } = useSelector((state)=>state.user)
  const [collapsed,setCollapsed] = useState(false)
  const location = useLocation();
  const Navigate = useNavigate();
  const userMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-8-line",
    },
    {
      name: "Appointment",
      path: "/appointment",
      icon: "ri-bookmark-3-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "profile",
      path: "/profile",
      icon: "ri-profile-line",
    },
   
  ];
  const menuToRender = userMenu;
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
             <div className={`menu-item `}>
            <i className="ri-logout-circle-r-line" onClick={()=>{ localStorage.clear();Navigate('/login')}}> Logout</i>
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
