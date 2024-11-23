import express from 'express';
import { obtenerPacientes, agregarPaciente, obtenerPaciente,actualizarPaciente,eliminarPaciente } from '../controllers/pacienteController.js';
import checkauth from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/')
    .post(checkauth, agregarPaciente)
    .get(checkauth, obtenerPacientes);

router.route('/:id')
    .get(checkauth, obtenerPaciente)
    .put(checkauth, actualizarPaciente)
    .delete(checkauth, eliminarPaciente)

export default router;