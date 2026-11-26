import axios from 'axios'
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1', timeout: 10000, headers:{'Content-Type':'application/json'} })
api.interceptors.request.use(c => { const token=sessionStorage.getItem('fhdod_token'); if(token)c.headers.Authorization=`Bearer ${token}`; return c })
api.interceptors.response.use(r=>r.data, e=>Promise.reject(new Error(e.response?.data?.message || 'Não conseguimos carregar as informações.')))
export const unwrap = response => response?.data ?? response
export const surveyHeaders = token => ({headers:{'X-Survey-Token':token}})
