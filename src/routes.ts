import { Router } from 'express';
import CadastroController from './controller/CadastroController';

const routes = Router()

routes.post('/cadastros', CadastroController.create);
routes.get('/cadastros', CadastroController.list);
routes.get('/cadastros/:id', CadastroController.find);
routes.put('/cadastros/:id', CadastroController.update);
routes.put('/cadastros', CadastroController.create);
routes.delete('/cadastros/:id', CadastroController.delete);

export default routes;