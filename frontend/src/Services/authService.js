
export const registerUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }
  
      return await response.json(); // Return successful response
    } catch (error) {
      console.error('Error during registration:', error);
      throw error; // Propagate error to the caller
    }
  };