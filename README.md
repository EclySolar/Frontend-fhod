# FHDOD — Frontend (HTML, CSS e JavaScript)

Projeto escolar de pesquisa de satisfação para a Fundação Hospitalar Dr. Oswaldo Diesel.

## Arquivos
- `index.html`: pesquisa dos pacientes.
- `funcionarios.html`: indicadores e TV Wall para apresentação da equipe.
- `css/style.css`: aparência.
- `js/app.js`: telas, perguntas, navegação, gráficos e dados de teste.
- `assets/logo-fhdod.png`: logotipo fornecido para o projeto.

## Como abrir no VS Code
1. Extraia o ZIP **mantendo a estrutura das pastas**.
2. No VS Code, escolha **Arquivo → Abrir Pasta** e selecione `FHDOD_frontend_pronto_VSCode`.
3. Abra `index.html` no navegador (pode clicar duas vezes).
4. Para ver as respostas da pesquisa aparecerem também em `funcionarios.html`, prefira executar as duas páginas no mesmo endereço local usando **Live Server** no VS Code (clique em **Go Live**). Isso evita diferenças de armazenamento entre arquivos `file://`.
5. Para testar a pesquisa, selecione setor, turno, nota geral e responda ou pule as perguntas opcionais. Abra `funcionarios.html` para visualizar os indicadores e o TV Wall.

## Estado do projeto — importante
- **Frontend demonstrável**, com navegação de pesquisa, perguntas adaptadas por setor, cinco graus de satisfação, Ouvidoria e indicadores.
- **Não há banco de dados nem servidor**: respostas de teste ficam no armazenamento local do navegador e não são compartilhadas entre computadores.
- **Área dos funcionários NÃO possui autenticação nem restrição reais.** `funcionarios.html` é uma interface para demonstração, que o Igor deverá proteger no backend.
- **Não use dados reais de pacientes.** Na demonstração, o telefone digitado não é salvo; integração e regras de privacidade serão implementadas e revisadas junto ao backend.
- A data é obtida automaticamente do dispositivo que abriu a pesquisa (o backend deverá validar/registrar a data definitiva).
- Os botões de seleção de setor e turno estão na interface; QR Code por setor foi omitido desta versão visual a pedido da dupla, embora conste no enunciado do professor.
- Para publicar a versão final, é necessário conectar o backend do Igor, salvar respostas no banco de dados, controlar permissões por perfil, validar acesso ao dashboard, sincronizar indicadores e testar a aplicação.

## Para adicionar ao repositório de sua dupla
Copie o conteúdo desta pasta para dentro do projeto, respeitando a estrutura existente. Se já houver `index.html` ou pastas `css`/`js`, confira antes de sobrescrever. Peça ao Igor para integrar os dados sem modificar o visual aprovado.

## Git (se a pasta já for um clone do repositório)
```bash
git status
git add .
git commit -m "feat: adiciona frontend da pesquisa FHDOD"
git push
```
Se você clonou apenas os arquivos desta pasta, é preciso copiá-los para o repositório correto antes de usar esses comandos.
