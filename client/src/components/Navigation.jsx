import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
        <Link to="/gastos">
             <h1 className='font-bold text-3xl mb-4'>Lista de gastos</h1> 
        </Link>

        <button className=' bg-indigo-500 px-3 py-2 rounded-lg  hover:bg-indigo-400 transition-transform duration-300'>
        <Link to= "/crear-gastos"> 
            <h1 className='font-bold '>Registrar gasto</h1> 
        </Link>
        </button>
    </div>
  );
}

