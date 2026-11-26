# Ouvidoria FHDOD

Front-end React da pesquisa de satisfação da Fundação Hospitalar Dr. Oswaldo Diesel. A pesquisa pública foi projetada para uso simples, com texto legível, foco visível e áreas de toque amplas.

## Executar

```bash
cp .env.example .env
npm install
npm run dev
```

`VITE_ENABLE_MOCKS=true` inicia o MSW e permite testar o fluxo sem API. Para integrar a API, defina `VITE_ENABLE_MOCKS=false` e configure `VITE_API_URL` e `VITE_SOCKET_URL`.

Rotas principais: `/`, `/pesquisa/atendimento`, `/login`, `/setor/perguntas`, `/admin/dashboard` e `/tvwall`. No modo demo, qualquer e-mail efetua login; e-mails contendo `setor` simulam o perfil UserSetor.

Comandos: `npm run dev`, `npm run build`, `npm test` e `npm run lint`.

Os contratos de respostas e campos devem ser confirmados contra o Swagger quando o back-end estiver disponível. Os mocks são estritamente locais e nunca são ativados quando `VITE_ENABLE_MOCKS=false`.
