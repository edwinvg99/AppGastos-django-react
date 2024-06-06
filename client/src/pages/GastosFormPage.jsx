import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createGastos,
  deleteGastos,
  updateGastos,
  getGasto,
} from "../api/gastos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function GastosFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateGastos(params.id, data);
      toast.success('Gasto actualizado.', {
        position: "button-left",
        style: {
        border: '1px solid #6366F1',
        padding: '16px',
        color: '#202020',
        },
        iconTheme: {
        primary: '#ffffff',
        secondary: '#6366F1',
        },
    });
    } else {
      await createGastos(data);

        toast.success('Gasto registrado.', {
            position: "button-left",
            style: {
            border: '1px solid #00D26A',
            padding: '16px',
            color: '#202020',
            },
            iconTheme: {
            primary: '#ffffff',
            secondary: '#00D26A',
            },
        });
    }
    navigate("/gastos");
  });

  useEffect(() => {
    async function loadGastos() {
      if (params.id) {
        const {
          data: { titulo, descripcion, fecha, monto },
        } = await getGasto(params.id);
        setValue("titulo", titulo);
        setValue("descripcion", descripcion);
        setValue("fecha", fecha);
        setValue("monto", monto);
      }
    }
    loadGastos();
  }, []);
  return (
    <div className="max-x-l mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="titulo"
          {...register("titulo", { required: true })}
          className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.titulo && <span> El titulo es requerido</span>}

        <textarea
          name=""
          id=""
          rows="3"
          placeholder="descripcion"
          {...register("descripcion", { required: true })}
          className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.descripcion && <span> La descripcion es requerida</span>}

        <div className=" grid grid-cols-2 mx-auto gap-3">
          <input
            type="date"
            placeholder="Fecha"
            {...register("fecha", { required: true })}
            className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.fecha && <span>La fecha es requerida</span>}

          <input
            type="number"
            placeholder="Monto"
            {...register("monto", { required: true })}
            className=" bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          />
          {errors.monto && <span>El monto es requerido</span>}
        </div>

        <button className=" bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          guardar
        </button>
      </form>

      {params.id && (
        <button
          className=" bg-red-500 p-3 rounded-lg w-full mt-3"
          onClick={async () => {
            const aceptar = window.confirm(
              "Esta seguro de eliminar este registro?"
            );
            if (aceptar) {
              await deleteGastos(params.id);

              toast.success('Gasto eliminado.', {
                position: "button-left",
                style: {
                border: '1px solid #EF4444',
                padding: '16px',
                color: '#202020',
                },
                iconTheme: {
                primary: '#ffffff',
                secondary: '#EF4444',
                },
            });
              navigate("/gastos");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
