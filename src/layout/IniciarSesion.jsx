import { Outlet } from 'react-router-dom';

const IniciarSesion = () => {
  return (
    <div>
      <h1>Desde IniciarSesion.jsx</h1>
      
      <Outlet />
    </div>
  )
};

export default IniciarSesion