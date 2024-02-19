import axios from 'axios';
import { error } from '@sveltejs/kit';

export const load = async () => {
  try {
    const apiUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter';
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
