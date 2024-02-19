import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { organisasjonsnummer } = params;

  try {
    // Construct the API URL using the `organisasjonsnummer`
    const apiUrl = `https://data.brreg.no/enhetsregisteret/api/enheter/${organisasjonsnummer}`;
    const response = await axios.get(apiUrl);
    const companyData = response.data;
    return {
		companyData
    };
  } catch (e) {
    console.error('Error fetching company data:', e);
    // Handle errors, for example, by returning an error message or status
	throw error(e.status, e.message);
  }
}
