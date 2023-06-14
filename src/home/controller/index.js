import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemons } from "../../api/index";

export const context = createContext()

export const useController = () => new Controller(useContext(context))

class Controller {
    constructor(context) {
        this.context = context

        this.pokemonList = context.pokemonList
        this.setPokemonList = context.setPokemonList

        this.offset = context.offset
        this.setOffset = context.setOffset
        this.limit = context.limit
        this.setLimit = context.setLimit

        this.handlePrevNext = context.handlePrevNext
    }

}


export function HomeProvider({ children }) {
    const [pokemonList, setPokemonList] = useState();
    const [offset, setOffSet] = useState(0);
    const [limit, setLimit] = useState(12);

    function handleFetch(offset, limit){
        getPokemons(offset, limit)
        .then(res => {
            setPokemonList(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function handleSortName(pokemonList){
        // const sortedData = pokemonList.results.name.sort((a, b) => {
        //     return a.name.localeCompare(b.name);
        // });
        // setPokemonList(sortedData);
    };

    function handleSortID(){
        
    }

    // console.log(pokemonList)

    function handlePrevNext(offsetUrl){
        // let offsetNum = offsetUrl.toString().match(/offset=(\d+)/i)[1];
        // setOffSet(offsetNum)
        console.log(offsetUrl)
    }

    useEffect(() => {
        handleFetch(offset, limit)
        // handleSortName()
        console.log(pokemonList)
    },[offset])


    return (
        <context.Provider
            value={{
                pokemonList, setPokemonList, handlePrevNext
            }}
        >
            {children}
        </context.Provider>
    )
}