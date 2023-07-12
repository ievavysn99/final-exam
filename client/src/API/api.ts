const fetchUserData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

export default fetchUserData;
