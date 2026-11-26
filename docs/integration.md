# Integração com API

A URL é definida por `VITE_API_URL` (padrão `http://localhost:3000/api/v1`). Serviços centralizados usam Axios e esperam envelopes `{ success, data, message }`.

Endpoints atualmente consumidos: `POST /auth/login`, `POST /auth/logout`, `GET /public/sectors`, `GET /public/shifts`, `GET /public/surveys/:id/questions`, `POST /public/surveys`, `PUT /public/surveys/:id/answers/:surveyQuestionId` e `POST /public/surveys/:id/complete`.

O token de acesso é enviado como Bearer para o contrato provisório. A equipe de back-end deve confirmar o formato de refresh token, payload de criação de pesquisa, opções de questões, permissões granulares, paginação e eventos Socket.IO. Dados do TV Wall só devem ser renderizados quando a API autorizar agregação suficiente.
