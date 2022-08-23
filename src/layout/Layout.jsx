import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Desde Layout.jsx</h1>
      
      <Outlet />
    </div>
  )
};

export default Layout