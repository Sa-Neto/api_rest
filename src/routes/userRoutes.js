import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

// index => lista todos os usuários => GET
// store/create => cria um novo usuário => POST
// delete => apaga um usuário => DELETE
// show => mostra um usuário => GET
// update => aualiza um usuário => PATCH OU PUT

export default router;
