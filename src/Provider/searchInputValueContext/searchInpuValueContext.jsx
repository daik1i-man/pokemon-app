import React, { createContext, useState } from 'react'

export const SearchInputValueContext = createContext();

export default function SearchInpuValueContextComponent({ children }) {
    const [inputValue, setInputValue] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    const FilteredDatas = (event) => {
        setInputValue(event.target.value);

        setFiltered(pokemons.filter(f => f.name.includes(event.target.value)));
    }

    return (
        <SearchInputValueContext.Provider value={
            { inputValue, setInputValue, FilteredDatas, filtered, setFiltered, pokemons, setPokemons }
        }>
            {children}
        </SearchInputValueContext.Provider>
    )
}

