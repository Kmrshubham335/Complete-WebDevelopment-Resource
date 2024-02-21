import express from 'express';
import cookieParser from 'cookie-parser';
import Cookies from '../controller/cookies.js';

const router = express.Router();
const cookiesController = new Cookies();

router.use(cookieParser());

router.get('/setcookie', cookiesController.setCookie.bind(cookiesController));
router.get('/getCookies', cookiesController.getCookie.bind(cookiesController));
router.get('/deleteCookies', cookiesController.deleteCookie.bind(cookiesController));

export default router;

