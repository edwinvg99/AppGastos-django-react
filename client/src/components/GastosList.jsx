import { useEffect, useState } from "react";
import { getAllGastos } from "../api/gastos.api";
import { GastosCard } from "./GastosCard";

export function GastosList() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    async function loadGastos() {
      const res = await getAllGastos();
      setGastos(res.data);
    }
    loadGastos();
  }, []);

  return(
  <div className="grid grid-cols-3 gap-3">
    {gastos.map((gasto) => (
      <GastosCard key={gasto.id} gasto={gasto} />
    ))}
  </div>

)}
