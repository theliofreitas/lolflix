const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://lolflix.herokuapp.com';

const URL_YOUTUBE = 'https://www.googleapis.com/youtube/v3';

export default {
  URL,
  URL_YOUTUBE,
};
