import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
const ok=data=>HttpResponse.json({success:true,data})
export const worker=setupWorker(
  http.get('*/public/sectors',()=>ok([{id:'emergency',name:'Pronto atendimento',description:'Atendimento imediato'},{id:'inpatient',name:'Internação',description:'Durante sua permanência'},{id:'surgery',name:'Bloco cirúrgico',description:'Procedimentos cirúrgicos'},{id:'xray',name:'Raio X',description:'Exames de imagem'}])),
  http.get('*/public/shifts',()=>ok(['Manhã','Tarde','Noite'])),
  http.get('*/public/surveys/:id/questions',()=>ok([{id:'reception',stage:'Recepção',text:'Como você avalia o atendimento recebido na recepção?',type:'rating_1_5',required:true}])),
  http.post('*/auth/login',async({request})=>{const {email}=await request.json();return ok({token:'demo-token',user:{name:email?.split('@')[0]||'Colaborador',role:email?.includes('setor')?'UserSetor':'UserAdmin'}})}),
  http.post('*/auth/logout',()=>ok({})),http.post('*/public/surveys',()=>ok({id:'demo-survey'})),http.post('*/public/surveys/:id/complete',()=>ok({}) )
)
