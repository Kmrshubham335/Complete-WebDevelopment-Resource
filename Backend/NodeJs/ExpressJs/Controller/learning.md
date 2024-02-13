# controllers
 Are simply JavaScript modules that define the logic for handling different types of requests to your server. They help in organizing your code by separating concerns—specifically, separating the code that defines how your server responds to different types of requests from the code that sets up your routes and starts your server.

 Controllers: These are modules that contain functions to handle specific types of requests. For example, you might have a UserController that contains functions to handle requests related to users, such as retrieving user information, creating new users, updating users, and deleting users.

Routes: Routes are responsible for mapping HTTP requests (such as GET, POST, PUT, DELETE) to specific controller functions. Each route definition specifies an HTTP method, a URL path, and the controller function that should handle requests to that path. For example, you might have a route that handles GET requests to /users by calling the getAllUsers function from your UserController.

Middleware: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can perform tasks such as parsing request bodies, authenticating users, and handling errors. Middleware can be applied globally to all routes or specific to certain routes.
