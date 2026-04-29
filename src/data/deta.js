import axios from "axios";
const URL = "https://api.themoviedb.org/3";
const API_KEY = "918e47f9694d21245047d1b2fd94925e";

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};
export const fetchData = (movies) => {
    return axios.get(`${URL}${endpoints[movies]}?api_key=${API_KEY}`)
}