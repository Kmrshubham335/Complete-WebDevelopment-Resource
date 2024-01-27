// Simulating an asynchronous operation with a callback
function getUser(userId, callback) {
    // Assume fetching user data takes some time (simulated with setTimeout)
    setTimeout(() => {
      const user = {
        id: userId,
        username: `user${userId}`,
        email: `user${userId}@example.com`
      };
  
      // Invoke the callback with the user data
      callback(null, user); // Pass null as the error parameter since there's no error in this case
    }, 1000); // Simulate a 1-second delay
  }
  
  // Example usage of the getUser function with a callback
  const userId = 123;
  
  getUser(userId, (error, user) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('User data:', user);
    }
  });
  