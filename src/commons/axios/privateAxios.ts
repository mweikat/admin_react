import axios from "axios";

//const token = localStorage.getItem('access_token');

export default axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000 * 5,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }
});