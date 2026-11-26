import {createContext,useContext,useState} from 'react'
const C=createContext(null); export const useSurvey=()=>useContext(C)
export function SurveyProvider({children}){const [survey,setSurvey]=useState(()=>JSON.parse(sessionStorage.getItem('fhdod_survey')||'{"attendances":[],"answers":{}}'));const update=v=>{const next={...survey,...v};setSurvey(next);sessionStorage.setItem('fhdod_survey',JSON.stringify(next))};const clear=()=>{sessionStorage.removeItem('fhdod_survey');setSurvey({attendances:[],answers:{}})};return <C.Provider value={{survey,update,clear}}>{children}</C.Provider>}
