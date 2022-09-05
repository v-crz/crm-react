import { useState, useEffect } from 'react';
import Cliente from '../components/Cliente';

const Inicio = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url); // usando GET
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        
      }
    }

    obtenerClientesAPI();
  }, []);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>
        Clientes
      </h1>
      <p className='mt-3'>
        Administra tus clientes
      </p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Inicio
