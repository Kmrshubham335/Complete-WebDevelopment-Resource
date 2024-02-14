# Static Files
Css files,Javascript file,image files,video files ect are considered as static files in Express js
To serve static files we use the express.static built-in middleware function in express.

# Syntax
express.static(root, [options])
# example
```javascript
const express = require('express');
const app = express();

// Specify the directory where your static files are located
app.use(express.static('public'));

// Now, any file in the 'public' directory can be accessed directly via its URL
// For example, if you have a file named 'styles.css' in the 'public' directory, 
// it can be accessed at http://localhost:3000/styles.css

// We can also specify multiple directories if needed
// app.use(express.static('public'));
// app.use(express.static('uploads'));

// We can access files inside nested directories too.
// For example, if we have an image named 'logo.png' inside the 'images' directory 
// within 'public', it can be accessed at http://localhost:3000/images/logo.png

//  other routes and middleware go here

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```
# argument in static Files
```javascript
app.use(express.static('public', {
    dotfiles: 'deny',
    etag: false,
    index: false,
    maxAge: '1d',
    redirect: true,
    immutable: true
}));
```
# Dotfiles: 
Determines how Express should respond to requests for files that start with a dot (hidden files).
Default: 'ignore'
Other possible values: 'allow', 'deny'

# etag: 
Enables or disables etag generation for static resources. An etag is a unique identifier for a specific version of a file.
Default: true
Set to true to enable etags, false to disable them.

 # extensions: 
An array of file extensions that are considered when looking for files.
Default: false (disables extension fallback)
Example: ['html', 'htm']

# index
 Specifies whether to serve directory index files.
Default: 'index.html'
Set to false to disable directory index files.

# maxAge
 Specifies how long (in milliseconds) the files should be cached in the browser cache.
Default: '0' (no caching)
Example: '1d' (cache for 1 day)

# redirect
: Determines whether or not to redirect to trailing / when the pathname is a directory.
Default: true
Set to false to disable trailing slash redirects.

# immutable
: Specifies whether to send the immutable directive in the Cache-Control response header.
Default: false

