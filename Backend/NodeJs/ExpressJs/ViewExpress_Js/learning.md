Views contain the HTML served by our application and separate our application logic from your presentation logic. Views are stored in the views directory.
# Or
 "view" is the part of the application responsible for presenting data to users.
 In Express.js, a view refers to the HTML pages our application sends to the client's browser.

# Creating View
views/index.html
<html>
    <body>
        <h1>Hello Home Page</h1>
    </body>
</html>

# How Views Work in Express.js:
Express.js uses a templating engine to render dynamic HTML content.
Templating engines allow  to embed data into HTML templates.
When a client requests a page, Express renders the corresponding view and sends it as a response.

# app.sendFile()
 – This is used to transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.

# process.cwd() – 
process is node's global object, and .cwd() returns where node is running.

