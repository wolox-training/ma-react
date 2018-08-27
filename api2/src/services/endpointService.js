import api from '../../config/api/api.js';

export default {
  getBookDetail: id => api.get('/books', { id })
};
