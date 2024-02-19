import axios from 'axios';
import { serializeNonPOJOs } from '$lib/utils/api';

export const load = async () => {
  try {
    // Define the URL for the Enhetsregisteret API
    const apiUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter';
    
    // Use Axios to get data from the API
    const response = await axios.get(apiUrl, {
      params: {
        // Add any query parameters here, for example, page size or specific fields
        size: 10 // This is just an example; adjust according to the API documentation
      }
    });

    // Assuming the response data has a structure you want to directly pass to the page
    // You might need to adjust the data manipulation based on the actual API response structure
    const entities = response.data; // Adjust this based on the actual structure
    return {
		entities
    };
  } catch (error) {
    console.error('Failed to fetch entities:', error);
    // Handle error or return an error state as appropriate
    return {
      props: {
        error: 'Failed to load entities.'
      }
    };
  }
};
