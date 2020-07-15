import express, { response, request } from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST http:localhost:3333/users - Criar um usuário
//GET http:localhost:3333/users - Listar usuários
//GET http: localhost:3333/users/1 - Buscar dados do usuário com ID 1

//Request Param: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request body: Parâmetros para criação/atualização de informações

app.listen(3333);