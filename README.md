🚀 API de Tarefas com Autenticação JWT

API REST desenvolvida com Node.js para gerenciamento de tarefas com autenticação segura utilizando JWT. Cada usuário possui acesso apenas às suas próprias tarefas.

🧠 Funcionalidades
Cadastro de usuário
Login com geração de token JWT
Criação de tarefas
Listagem de tarefas do usuário autenticado
Atualização de tarefas
Exclusão de tarefas
Proteção de rotas com middleware
🔐 Autenticação

Após o login, a API retorna um token JWT:

{
  "token": "seu_token_aqui"
}

Esse token deve ser enviado nas requisições protegidas:

Authorization: Bearer SEU_TOKEN
🔒 Controle de Acesso

Cada tarefa está vinculada a um usuário através do campo:

UsuarioId

As operações utilizam:

where: {
  UsuarioId: req.user.id
}

Garantindo que um usuário não acesse dados de outro.

🛠️ Tecnologias
Node.js
Express
Sequelize
MySQL
jsonwebtoken (JWT)
bcrypt
Zod
📂 Estrutura do Projeto
src/
 ├ controllers/
 ├ models/
 ├ routes/
 ├ middlewares/
 ├ config/
 └ app.js
📌 Rotas
Usuário
Método	Rota	Descrição
POST	/register	Criar usuário
POST	/login	Login e gerar token
Tarefas (Protegidas)
Método	Rota	Descrição
POST	/tasks	Criar tarefa
GET	/tasks	Listar tarefas
GET	/tasks/:id	Buscar tarefa
PUT	/tasks/:id	Atualizar tarefa
DELETE	/tasks/:id	Deletar tarefa
⚙️ Como rodar o projeto
1. Clonar repositório
git clone https://github.com/yJeanx11x/API-de-Tarefas-de-Equipe.git
2. Instalar dependências
npm install
3. Criar arquivo .env
SECRET=sua_chave_secreta
DB_NAME=seu_banco
DB_USER=seu_usuario
DB_PASS=sua_senha
4. Rodar o servidor
npm run dev
🧪 Exemplo de uso
Criar usuário
POST /register

{
  "nome": "Jean",
  "email": "jean@email.com",
  "password": "123456"
}
Login
POST /login

{
  "email": "jean@email.com",
  "password": "123456"
}
Criar tarefa
POST /tasks
Authorization: Bearer TOKEN

{
  "titulo": "Estudar Node",
  "descricao": "Praticar JWT",
  "status": false
}
🏆 Diferenciais
Autenticação com JWT
Controle de acesso por usuário
Estrutura organizada (MVC)
Boas práticas de backend
📈 Status

Em desenvolvimento

👨‍💻 Autor

Jean Lucas
Desenvolvedor Backend em formação 🚀

🧾 Licença

Este projeto é para fins de estudo.