import express from "express";
import { registrar, perfil, confirmar,autenticar,olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from "../controllers/veterinarioController.js";
import checkauth from "../middleware/authMiddleware.js";
const router = express.Router();

//Área pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

//Área privada
router.get('/perfil', checkauth ,perfil);
router.put('/perfil/:id', checkauth, actualizarPerfil)
router.put('/actualizar-password', checkauth, actualizarPassword)

export default router;