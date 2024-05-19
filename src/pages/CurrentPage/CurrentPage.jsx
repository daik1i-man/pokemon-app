import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import IsLoader from '../../components/isLoader/isLoader';
import axios from 'axios';
import { PagesUrlContext } from '../../Provider/PagesUrl/PagesUrlContext';
import { useParams } from 'react-router-dom';
import { SearchInputValueContext } from '../../Provider/searchInputValueContext/searchInpuValueContext';

export default function CurrentPage() {
    const [loading, setLoading] = useState(false);
    const { setNextPage, setPrevPage } = useContext(PagesUrlContext);
    const { filtered, setFiltered, pokemons, setPokemons } = useContext(SearchInputValueContext);

    const { name } = useParams();

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
                .then((res) => res.data)
            setPrevPage(data.previous);
            setNextPage(data.next);
            const pokemonDatas = await Promise.all(
                data.results.map(async (item) => {
                    const response = await axios.get(item.url);

                    return response.data;
                }),
            )

            setFiltered(pokemonDatas);
            setPokemons(pokemonDatas);

        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [name])

    if (loading) {
        return <IsLoader />
    }

    return (
        <div className="grid grid-cols-4 my-24">
            {filtered.map((e, index) => (
                <PokemonCard
                    key={index}
                    pokemonImg={e.sprites.other.dream_world.front_default}
                    pokemonTypes={e.types}
                    pokemonId={index + 1}
                    pokemonName={e.name}
                />
            ))}
        </div>
    )
}

