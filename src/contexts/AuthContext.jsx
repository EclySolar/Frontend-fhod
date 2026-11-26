import {createContext,useContext,useState} from 'react'
import {authService} from '../services/authService'
const C=createContext(null); export const useAuth=()=>useContext(C)
export function AuthProvider({children}){const [user,setUser]=useState(()=>JSON.parse(sessionStorage.getItem('fhdod_user')||'null')); const login=async data=>{const r=await authService.login(data); sessionStorage.setItem('fhdod_token',r.accessToken);sessionStorage.setItem('fhdod_refresh_token',r.refreshToken);sessionStorage.setItem('fhdod_user',JSON.stringify(r.user));setUser(r.user);return r.user};const logout=async()=>{try{await authService.logout(sessionStorage.getItem('fhdod_refresh_token'))}finally{sessionStorage.clear();setUser(null)}};return <C.Provider value={{user,login,logout}}>{children}</C.Provider>}
