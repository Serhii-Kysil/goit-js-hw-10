// import axios from 'axios';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// document.addEventListener('DOMContentLoaded', function () {
//   const breedSelect = document.querySelector('.breed-select');
//   const loader = document.querySelector('.loader');
//   const error = document.querySelector('.error');
//   const catInfo = document.querySelector('.cat-info');

//   //API ket
//   axios.defaults.headers.common['x-api-key'] =
//     'live_z3kUBxBylYGaxWuymlkE6IXmFS3uZ1Ok24Ncx79aBPpUq8Py8iJuGpOhMl0iz9Mt';

//   function populateBreedsDropdown() {
//     loader.style.display = 'block';
//     breedSelect.style.display = 'none';
//     breedSelect.style.height = '30px';
//     breedSelect.style.borderRadius = '5px';
//     error.style.display = 'none';

//     fetchBreeds()
//       .then(function (breeds) {
//         breeds.forEach(function (breed) {
//           const option = document.createElement('option');
//           option.value = breed.id;
//           option.textContent = breed.name;
//           breedSelect.appendChild(option);
//         });

//         loader.style.display = 'none';
//         breedSelect.style.display = 'block';
//       })
//       .catch(function (err) {
//         console.error(err);
//         loader.style.display = 'none';
//         error.style.display = 'block';
//       });
//   }

//   function displayCatInfo() {
//     let selectedBreedId = breedSelect.value;

//     loader.style.display = 'block';
//     catInfo.style.display = 'none';
//     error.style.display = 'none';

//     fetchCatByBreed(selectedBreedId)
//       .then(function (catData) {
//         catInfo.innerHTML = `
//           <img src="${catData.url}"    alt="Cat Image" />
//           <h3>${catData.breeds[0].name}</h3> <br />
//           <p><strong>Description:</strong> ${catData.breeds[0].description}</p><br />

//           <p><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p> <br />
//         `;
//         catInfo.style.background = '#f2f2f2';
//         catInfo.style.padding = '20px';
//         catInfo.style.marginTop = '15px';
//         catInfo.style.fontFamily = 'Noto Sans, sans-serif';

//         const img = catInfo.querySelector('img');
//         img.style.width = '520px';
//         img.style.height = '520px';
//         img.style.borderRadius = '5px';
//         img.style.border = '1px solid #ccc';

//         loader.style.display = 'none';
//         catInfo.style.display = 'block';
//       })
//       .catch(function (err) {
//         console.error(err);
//         loader.style.display = 'none';
//         error.style.display = 'block';
//       });
//   }

//   breedSelect.addEventListener('change', displayCatInfo);

//   populateBreedsDropdown();
// });
import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', function () {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');

  //API key
  axios.defaults.headers.common['x-api-key'] =
    'live_z3kUBxBylYGaxWuymlkE6IXmFS3uZ1Ok24Ncx79aBPpUq8Py8iJuGpOhMl0iz9Mt';

  function populateBreedsDropdown() {
    loader.style.display = 'block';
    breedSelect.style.display = 'none';
    breedSelect.style.height = '30px';
    breedSelect.style.borderRadius = '5px';
    error.style.display = 'none';

    fetchBreeds()
      .then(function (breeds) {
        breeds.forEach(function (breed) {
          const option = document.createElement('option');
          option.value = breed.id;
          option.textContent = breed.name;
          breedSelect.appendChild(option);
        });

        loader.style.display = 'none';
        breedSelect.style.display = 'block';
      })
      .catch(function (err) {
        console.error(err);
        loader.style.display = 'none';
        error.style.display = 'block';
      });
  }

  function displayCatInfo() {
    let selectedBreedId = breedSelect.value;

    loader.style.display = 'block';
    catInfo.style.display = 'none';
    error.style.display = 'none';

    fetchCatByBreed(selectedBreedId)
      .then(function (catData) {
        catInfo.innerHTML = `
          <img src="${catData.url}" alt="Cat Image" style="width: 520px; height: 520px; border: 1px solid #ccc; border-radius: 5px; float: left;" />
          <div style=" width:600px; padding: 20px; margin-top: 15px; font-family: 'Noto Sans', sans-serif;">
            <h3 style="font-size:30px;">${catData.breeds[0].name}</h3>
            <p style="line-height: 1.8;  letter-spacing: 0.05em;"> ${catData.breeds[0].description}</p>
            <p style="font-size:20px"><strong>Temperament:</strong> ${catData.breeds[0].temperament}</p>
          </div>
        `;
        loader.style.display = 'none';
        catInfo.style.display = 'flex';
      })
      .catch(function (err) {
        console.error(err);
        loader.style.display = 'none';
        error.style.display = 'block';
      });
  }

  breedSelect.addEventListener('change', displayCatInfo);

  populateBreedsDropdown();
});
