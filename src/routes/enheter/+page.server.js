import axios from 'axios';
import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
  // Access query parameters
  const page = url.searchParams.get('page') || '1'; // Default to page 1 if not specified
  const size = url.searchParams.get('size') || '30'; // Default to size 30 if not specified

  try {
    const apiUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    const response = await axios.get(apiUrl, {
      params: {
        page, // Use the page variable from the query parameters
        size  // Use the size variable from the query parameters
      }
    });

    const entities = response.data;
    return {
		  entities
    };
  } catch (e) {
    console.error('Error: ', e);
    throw error(e.response?.status || 500, e.message);
  }
};
