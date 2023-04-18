import axios from "axios";

//URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=2b6b1a0c8bf9d5a21deb241e55678478&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;