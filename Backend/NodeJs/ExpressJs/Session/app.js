import express from 'express';
import session from 'express-session';
import routes from './routes/web.js';

const app = express();
const port = 3000;

// Set up session middleware
app.use(session({
    name:'shubham',
  secret: 'thisIsKey',
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge:20000},
}));

// Use routes defined in routes.js
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
