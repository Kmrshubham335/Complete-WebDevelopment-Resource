###### Creating an Express App:
An Express application is created by calling the express() function, and the resulting app object is stored in the variable app.
````javascript
const express = require('express')
const app = express()
````
###### Defining Routes:
In web development, a route refers to a mapping between a URL (or URL pattern) and a handler function that processes requests made to that URL. Routes define the endpoints of a web application and determine how the application responds to client requests.

In the context of Express.js, a popular web framework for Node.js, routes are created using methods like app.get(), app.post(), app.put(), app.delete(), etc., provided by the Express application object
## In an Express application, we can define routes like:
```javascript
app.get('/users', (req, res) => {
  // Handler function for GET requests to '/users'
  // Logic to retrieve and send a list of users
});
```
Above are the example of the Routes.
/users, /users/:id are route paths.:id is a route parameter, which allows capturing dynamic values from the URL.
app.get(), app.post(), app.put(), app.delete() are methods to define handlers for GET, POST, PUT, and DELETE requests respectively.

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Blog/:slug', (req, res) => {
  console.log(req.params)
  // { slug: 'Shubham' } it will return parameter for the above url
  res.send(`Hello to All Page ${req.params.slug}`)
})
```
 # Two routes are defined using the app.get() method. This method sets up a route for HTTP GET requests.
 The first route is for '/Blog/:slug'. Here, :slug is a route parameter, which is a placeholder for a value that will be provided in the URL. When a request is made to this route, the value provided for :slug will be accessible through req.params.slug.

### Request Handling:
The route handlers, callback functions are provided with req (request) and res (response) objects.

req.params contains route parameters extracted from the URL. In the first route, req params.slug will contain the value provided for :slug.req.query contains query parameters passed in the URL. In the second route, req.query will contain an object with properties mode and region and their corresponding values.

## Static file
```javascript
 app.use(express.static('public'))
```
The app.use(express.static('public')) statement in an Express application is used to serve static files such as HTML, CSS, JavaScript, images, and other assets from a directory named "public".

app: This refers to the Express application instance, which is created when you call express(). It represents your web server and allows you to define routes, middleware, and other settings.

use(): This is a method provided by the Express application object (app). It is used to mount middleware functions or sub-applications at a specified path in the application's middleware stack.

express.static('public'): This is the middleware function that serves static files. When a request is made for a static file (e.g., an image or CSS file), Express will look for the file in the directory specified in the argument. In this case, it's looking for files in the "public" directory. If the requested file is found, Express will serve it to the client.

'public': This argument specifies the directory from which to serve static files. It's a relative path, meaning it's relative to the directory from which the Node.js process is started. So, if your Node.js application is started from the root directory of your project, Express will look for the "public" directory in the root directory.