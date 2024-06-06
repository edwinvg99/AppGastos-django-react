import { useNavigate } from 'react-router-dom';

export function GastosCard({ gasto }) {

  const navigate = useNavigate();

  return (
    <div className=' bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer hover:scale-95 transition-transform duration-300'
    
      onClick={() =>{
        navigate(`/gastos/${gasto.id}`)
      }}

    >

      <h1 className=' font-bold uppercase text-indigo-400'>{gasto.titulo}</h1>
      <p className=' text-slate-400'>{gasto.descripcion}</p>
      <p className=' text-slate-400'>{gasto.fecha}</p>
      <p className=' text-slate-400'>{gasto.monto}</p>
      
    </div>
  );
}
