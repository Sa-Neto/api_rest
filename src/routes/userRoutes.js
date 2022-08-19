import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.store);
// index => lista todos os usuários => GET
// store/create => cria um novo usuário => POST
// delete => apaga um usuário => DELETE
// show => mostra um usuário => GET
// update => aualiza um usuário => PATCH OU PUT

export default router;
