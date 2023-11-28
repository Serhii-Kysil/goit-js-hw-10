import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_z3kUBxBylYGaxWuymlkE6IXmFS3uZ1Ok24Ncx79aBPpUq8Py8iJuGpOhMl0iz9Mt';

const API_BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios
    .get(`${API_BASE_URL}/breeds`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${API_BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
      throw error;
    });
}
