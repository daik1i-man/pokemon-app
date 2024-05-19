import React, { useContext, useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { UrlDatasContext } from '../../Provider/UrlDatas/urlDatasContext';
import IsLoader from '../../components/isLoader/isLoader';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { SearchInputValueContext } from '../../Provider/searchInputValueContext/searchInpuValueContext';

export default function NextPage() {
    const [loading, setLoading] = useState(false);
    const { url } = useContext(UrlDatasContext);
    const { filtered, setFiltered, pokemons, setPokemons } = useContext(SearchInputValueContext);

    const { name } = useSearchParams();

    const fetchData = async () => {
        try {
            setLoading(true);

            const data = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
                .then((res) => res.data);

            const pokemonDatas = await Promise.all(
                data.results.map(async (item) => {
                    const response = await axios.get(item.url)

                    return response.data;
                })
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

    if (loading) return <IsLoader />

    return (
        <div className="grid grid-cols-4 my-24">
            {filtered.map((pokemon, index) => (
                <PokemonCard
                    key={index}
                    pokemonImg={pokemon.sprites.other.dream_world.front_default}
                    pokemonId={index + 1}
                    pokemonName={pokemon.name}
                    pokemonTypes={pokemon.types}
                />
            ))}
        </div>
    )
}

