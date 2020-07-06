import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/shop`);
    return res.data || [];
  },
  postShop: async (data) => {
    let res = await axios.post(`/api/shop`, data);
    return res.data || [];
  }
}