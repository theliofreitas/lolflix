const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://lolflix.herokuapp.com';

export default {
  URL,
};
