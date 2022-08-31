import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  
  return (
    <div className='md:flex md:min-h-screen'>

      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>
          CRM - Clientes
        </h2>

        <nav className='mt-10'>
          <Link 
            className={`${currentUrl === '/clientes' ? 'text-blue-300' : 'text-white'} 
            text-white text-2xl block mt-2 hover:text-blue-300`}
            to='/clientes'
          >
            Clientes
          </Link>
          <Link 
            className={`${currentUrl === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} 
            text-white text-2xl block mt-2 hover:text-blue-300`}
            to='/clientes/nuevo'
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className='md:w-3/4 p-10 md:h-screen overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  )
};

export default Layout