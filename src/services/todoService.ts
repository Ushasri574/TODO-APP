import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Function to fetch todos from the API
export const getTodos = async (limit: number, page: number) => {
  try {
    const response = await axios.get(API_URL, {
      params: { _limit: limit, _page: page },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};
