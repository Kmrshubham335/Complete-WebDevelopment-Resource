export class SessionController {
    // Method to get all session data
    getSessionData(req, res) {
        const sessionData = req.session.id; //ToGet sessionId 
        console.log('Session Data:',sessionData);
        // console.log(req.session.cookie)
        // console.log(req.sessionID)
        // res.json(sessionData);
    }
    // Method to set session data
    setSessionData(req, res) {
        const { key, value } = req.body;
        req.session.data = req.session.data || {};
        req.session.data[key] = value;
        console.log('Session Data set:', req.session.data);
        res.send('Session data set successfully');
    }

    // Method to destroy the session
    destroySession(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Error destroying session');
            } else {
                console.log('Session destroyed successfully');
                res.send('Session destroyed successfully');
            }
        });
    }


    
    // Method to get the value of a specific key from session data
    getSessionValue(req, res) {
        const { key } = req.params;
        const sessionValue = req.session.data ? req.session.data[key] : undefined;
        if (sessionValue !== undefined) {
            res.send(`Value of session key '${key}': ${sessionValue}`);
        } else {
            res.status(404).send(`Session key '${key}' not found`);
        }
    }

    // Method to delete a specific key from session data
    deleteSessionValue(req, res) {
        const { key } = req.params;
        if (req.session.data && req.session.data[key] !== undefined) {
            delete req.session.data[key];
            res.send(`Session key '${key}' deleted successfully`);
        } else {
            res.status(404).send(`Session key '${key}' not found`);
        }
    }

    // Method to clear all session data
    clearSession(req, res) {
        req.session.data = {};
        res.send('Session cleared successfully');
    }

    // Method to refresh session expiration time
    refreshSession(req, res) {
        req.session.touch();
        res.send('Session refreshed successfully');
    }
}
