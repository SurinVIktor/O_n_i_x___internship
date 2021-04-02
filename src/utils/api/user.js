import axios from "axios";

const apiUser = value => axios.get('https://api.github.com/search/users', {
    params: {
        q: value,
        client_id: process.env.REACT_APP_GIT_CLIENT_ID,
        client_secret: process.env.REACT_APP_GIT_CLIENT_SECRET
    }
});

export default apiUser;