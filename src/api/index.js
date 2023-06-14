import axios from "axios";

export const URL = 'https://pokeapi.co/api/v2/'

export const client = axios.create({
    baseURL: URL,
})

const getPokemons = (offset, limit) => {
    return client.get(`/pokemon/?offset=` + offset + `&limit=` + limit, {
    })
}

export {getPokemons};