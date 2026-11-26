import { api, unwrap } from './api'
export const authService={ login:data=>api.post('/auth/login',data).then(unwrap), me:()=>api.get('/auth/me').then(unwrap), logout:refreshToken=>api.post('/auth/logout',{refreshToken}) }
