Express.js Response Methods

1. res.render():
   - Description: Renders a view template using a specified template engine.
   - Example:
     ```javascript
     res.render('index', { title: 'Express.js' });
     ```

2. res.send():
   - Description: Sends a response to the client with data.
   - Example:
     ```javascript
     res.send({ message: 'Data successfully retrieved' });
     ```

3. res.json():
   - Description: Sends a JSON response to the client.
   - Example:
     ```javascript
     res.json({ message: 'Data successfully retrieved' });
     ```

4. res.sendFile():
   - Description: Sends a file as an octet stream.
   - Example:
     ```javascript
     res.sendFile('/path/to/file.pdf');
     ```

5. res.redirect():
   - Description: Redirects the client to a different URL.
   - Example:
     ```javascript
     res.redirect('/new-route');
     ```

6. res.status():
   - Description: Sets the HTTP status code of the response.
   - Example:
     ```javascript
     res.status(404).send('Not Found');
     ```

7. res.cookie():
   - Description: Sets a cookie in the client's browser.
   - Example:
     ```javascript
     res.cookie('user', 'John Doe').send('Cookie is set');
     ```

8. res.clearCookie():
   - Description: Clears a cookie previously set in the client's browser.
   - Example:
     ```javascript
     res.clearCookie('user').send('Cookie is cleared');
     ```

9. res.download():
   - Description: Sends a file as an attachment.
   - Example:
     ```javascript
     res.download('/path/to/file.pdf', 'filename.pdf');
     ```
```