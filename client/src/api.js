import axios from 'axios';

// base url
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getUser = async (username) => {
    try {
        const res = await axios.get(`/api/profile/${username}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}