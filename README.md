# nlw_roquet.q

**Figma** https://www.figma.com/file/vp3iFfd1ohCbHyDX9jCiQi/Roquet.q-%2302?node-id=159%3A1143

# Aula 01

- Layou global
- Página Home

\*\*Skill = HTML + CSS (Grid, Flex-Box, Definição REM)

# Aula 02

- Página Create-Pass
- Página Room
- Form da página Room com botão imersivo
- Criação de elementos via CSS (https://bennettfeely.com/clippy/)

# Aula 03

- Criação do modal
- Ajuste no layout de perguntas
- Ajuste nos botões

# Aula 04

- Ajuste do input da página Create-Pass
- Organização do diretório e conversão de HTML para EJS
- Instalar EJS, Express, nodemon, sqlite, sqllite3 via NPM (node)

  ```console
  npm init -y
  npm install ejs
  npm install express
  npm install nodemon -D
  npm install sqlite
  npm install sqlite3
  ```

- Configuração do servirdor em src/server.js

  ```javascript
  const express = require('express');
  const route = require('./routes'); //importa as rotas
  const path = require('path');

  const server = express();

  server.set('view engine', 'EJS'); //configura EJS
  server.use(express.static('piblic')); //definindo o difetório sr/public de forma estática
  server.set('views', path.join(__dirname, 'views')); //indica o diretório da pasta VIEWS ||  __dirname = SRC/, views
  server.use(route); //indica qual arquivo
  server.listen(3000, () => console.log('Rodando'));
  ```

- Configuração das Rotas

  ```javascript
  const express = require('express');

  const route = express.Router();

  route.get('/', (req, res) => res.render('index'));
  module.exports = route;
  ```

- Inicializar o servidor

  ```console
  npm start (configure no package.json o caminho em script para startar o servidor)
  ```

# Aula 05

- Verificar se ID da sala existe
- Número da sala dinâmico na página de perguntas
- Excluir e marcar como lidos integrados com banco de dados
- Página de Nenhuma questão criada
