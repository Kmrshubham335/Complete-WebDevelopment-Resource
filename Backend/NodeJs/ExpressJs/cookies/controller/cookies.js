import express from 'express';
import cookieParser from 'cookie-parser';

class Cookies {
    constructor() {
        this.router = express.Router();
        this.router.use(cookieParser());
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/set-cookie', this.setCookie);
        this.router.get('/get-cookie', this.getCookie);
        this.router.get('/delete-cookie', this.deleteCookie);
    }

    setCookie(req, res) {
        res.cookie("username", "shubham");
        res.send("Cookie Set...");
    }

    getCookie(req, res) {
        const username = req.cookies.username;
        if (username) {
            res.send(`Cookie Value: ${username}`);
        } else {
            res.send("Cookie Not Found");
        }
    }

    deleteCookie(req, res) {
        res.clearCookie("username");
        res.send("Cookie Deleted");
    }

    getRouter() {
        return this.router;
    }
}

export default Cookies;
