import axios from 'axios';
import { error } from '@sveltejs/kit';

export const load = async () => {
  try {
    // Define the URL for the Enhetsregisteret API
    const apiUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    
    // Use Axios to get data from the API
    const response = await axios.get(apiUrl, {
      params: {
        size: 50
      }
    });

    const entities = response.data;
    return {
		entities
    };
  } catch (e) {
    console.error('Error: ', e);
	throw error(e.status, e.message);
  }
};
