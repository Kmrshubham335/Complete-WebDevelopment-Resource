### Route Path
Route paths in Express.js are strings that define the URL pattern for a specific route. They determine how incoming requests are matched to route handlers. Route paths can be simple static strings or contain dynamic segments that capture variable values.
######  Static Route Paths:
```javascript
app.get('/about', (req, res) => {
    res.send('About Page');
});
```
the route path /about matches requests to http://example.com/about.

###### Dynamic Route Parameters:
 # Defining route parameters by prefixing a path segment with a colon :. Route parameters capture variable values from the URL and make them accessible within the route handler via the req.params object. 

```javascript
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User ID: ${userId}`);
});
```
 the route path /users/:userId matches requests to http://example.com/users/123, where 123 is captured as the value of userId.

 ##### Optional Route Parameters:
# Make route parameters optional by suffixing them with a question mark ?. 
```javascript
 app.get('/users/:userId?', (req, res) => {
    const userId = req.params.userId || 'default';
    res.send(`User ID: ${userId}`);
});
```
# Regular Expression Route Paths:

```javascript
app.get(/^\/users\/(\d+)$/, (req, res) => {
    const userId = req.params[0];
    res.send(`User ID: ${userId}`);
});
```
 the route path is defined as a regular expression /^\/users\/(\d+)$/, which matches numeric user IDs like http://example.com/users/123

# Wildcard Route Paths:

Express allows defining wildcard route paths using the asterisk * symbol to match any URL.

```javascript
app.get('/products/*', (req, res) => {
    res.send('Product Page');
});
```
The route path /products/* matches requests to any URL starting with /products/, such as http://example.com/products/123 or http://example.com/products/category/123.

# Combining Route Paths:

```javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
    const { userId, bookId } = req.params;
    res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});
```
The route path /users/:userId/books/:bookId matches requests to URLs like http://example.com/users/123/books/456.

