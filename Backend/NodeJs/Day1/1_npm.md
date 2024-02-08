```javascript
  Creates an HTTP server.
  @param {Object} req - The request object.
  @param {Object} res - The response object.
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
```
This code is creating a server using the Node.js `http` module. The `createServer` method is used to create an HTTP server that listens for incoming requests. 

The server is created with a callback function that takes two parameters: `req` (request) and `res` (response). This function is executed whenever a request is made to the server.

Inside the callback function, the response status code is set to 200, indicating a successful response. The `setHeader` method is used to set the content type of the response to `text/plain`, indicating that the response will be plain text.

Finally, the `end` method is called on the response object to send the response to the client. In this case, the response is simply the string "Hello World\n".