import React, { createContext, useState } from 'react'

export const DatasContext = createContext();

export default function DatasContextComponent({ children }) {
    const [pokemonData, setPokemonData] = useState({});
    const [filteredDatas, setFilteredDatas] = useState([]);
    return <DatasContext.Provider value={{ pokemonData, setPokemonData, filteredDatas, setFilteredDatas }}>{children}</DatasContext.Provider>
}
