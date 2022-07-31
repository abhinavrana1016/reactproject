import React from "react";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const location = useLocation();
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
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-circle-r-line",
    },
  ];
  const menuToRender = userMenu;
  return (
    <div className="main p-2">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="siderbar-header">
            <h1>Stay Healthy</h1>
          </div>
          <div className="menu">
            {menuToRender.map((menu) => {
              const isActive = (location.pathname === menu.path)
              return (
                <>
                  <div className={`menu-item ${isActive && 'active-menu-item'}`}>
                    <i className={menu.icon} />
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="content">
          <div className="header">Welcome to Stay Healthy</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
