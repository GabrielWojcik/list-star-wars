import axios from "axios";

const baseURL = 'https://swapi.dev/api'

const apiBase = axios.create({ baseURL });

export default apiBase;