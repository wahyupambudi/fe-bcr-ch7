import axios from 'axios';

export const register = async (name: string, email: string, password: string): Promise<string | undefined> => {
  try {
    const response = await axios.post('https://be-bcr-ch6-production.up.railway.app/api/v1/auth/register', {
      name,
      email,
      password,
    });

    if (response.status !== 201) {
      throw new Error(response.data.message || 'Registration failed');
    }
    return;

  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'Registration failed';
    }
    return 'Registration failed';
  }
};
