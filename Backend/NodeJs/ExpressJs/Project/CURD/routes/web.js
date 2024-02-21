import express from 'express';
import StudentController from '../controllers/StudentController.js';

const router = express.Router();
router.get('/', StudentController.WelcomeDoc);
router.get('/Student', StudentController.getDoc);
router.post('/Student', StudentController.createDoc);
router.get('/Student/edit/:id', StudentController.editDoc);
router.post('/Student/update', StudentController.updateDoc);
router.post('/Student/delete', StudentController.DeleteDoc);

// Route to handle Explore button click
router.get('/explore', StudentController.explore);

export default router;