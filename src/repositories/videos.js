import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(video) {
  console.log(video);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível retornar os dados');
    });
}

export default {
  create,
};
