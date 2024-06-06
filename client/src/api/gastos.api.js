import axios from 'axios'

const gastosApi = axios.create({
    baseURL: 'http://localhost:8000/gastos/api/v1/gastos/'
})
export const getAllGastos = () =>  gastosApi.get('/');
export const getGasto = (id) =>gastosApi.get(`/${id}/`)
export const createGastos = (gasto) => gastosApi.post('/', gasto);
export const deleteGastos = (id) => gastosApi.delete(`/${id}/`);
export const updateGastos = (id, gasto) => gastosApi.put(`/${id}/`, gasto)