import express from 'express';
import { SessionController } from '../controller/session.js';

const router = express.Router();
const sessionController = new SessionController();

router.get('/get-session-data', sessionController.getSessionData);
router.post('/set-session-data', sessionController.setSessionData);
router.get('/destroy', sessionController.destroySession);
router.get('/get-session-value/:key', sessionController.getSessionValue);
router.delete('/delete-session-value/:key', sessionController.deleteSessionValue);
router.get('/clear-session', sessionController.clearSession);
router.get('/refresh-session', sessionController.refreshSession);

export default router;
