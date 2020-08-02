import config from '../config';

const { URL_YOUTUBE } = config;
const key = 'AIzaSyAev3b2YW2Tx8KZbi18SQMo7vP68NybMFg';
const part = 'snippet';
const maxResults = 5;
const type = 'video';

function searchYoutubeVideos(searchString) {
  return fetch(`${URL_YOUTUBE}/search?key=${key}&part=${part}&type=${type}&maxResults=${maxResults}&q=${searchString}`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      // eslint-disable-next-line no-console
      console.log('Ocorreu um erro ao chamar a API do Youtube');
    });
}

export default {
  searchYoutubeVideos,
};
