import axios from "axios";

const CLIENT_ID = 'ae313b54c5cd16137af9';
const CLIENT_SECRET = '63da58aeb042a95b54a505407ccc7cec230c6db1';

const apiUser = value => axios.get(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

export default apiUser;