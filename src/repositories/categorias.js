import config from '../config';

const URL_CATEGORIES = config.URL;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/categorias?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível retornar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}/categorias`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível retornar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
