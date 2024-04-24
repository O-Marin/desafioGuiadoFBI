import express from 'express'
const router = express.Router()
import { homeControl, inicioSesionControl,dashboardControl } from '../controller/agentControl.js';

router.get('/', homeControl);
router.get('/signIn', inicioSesionControl);
router.get('/dashboard',dashboardControl)


export default router