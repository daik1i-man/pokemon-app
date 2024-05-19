import { Axis3D, Leaf, LifeBuoy, MoveLeft } from 'lucide-react'
import { Progress } from "flowbite-react";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DatasContext } from '../../Provider/DatasContextComponent/DatasContextComponent';
import axios from 'axios';


export default function PokemonPage() {
    const { pokemonData } = useContext(DatasContext);
    const [ablitiesData, setAblitiesData] = useState({});
    const { name } = useParams();
    let navigate = useNavigate();

    const NavigateHandler = () => navigate('/');

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setAblitiesData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(ablitiesData);

    useEffect(() => {
        fetchData();
    }, [name]);



    return (
        <div className='w-full mt-10 justify-center items-center' >
            <div className="max-w-7xl relative mx-auto h-full w-full justify-center bg-green-400 rounded-md">
                <div>
                    <MoveLeft onClick={NavigateHandler} className='absolute left-16 top-16 cursor-pointer' />
                </div>
                <div className="max-w-5xl mx-auto flex justify-between">
                    <div className="">
                        <h1 className='text-7xl ml-10'>{pokemonData.pokemonName}</h1>
                        <div className="max-w-72 h-14 space-x-4 justify-between flex mx-auto items-center relative top-16">
                            {pokemonData.pokemonTypes.map((type) => (
                                <div key={type.slot} className="w-10/12 bg-white text-green-400 h-full space-x-3 px-10 py-5 rounded-full flex items-center">
                                    <Leaf />
                                    <h1>{type.type.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <img className='mr-auto w-80 relative z-20 top-20' src={pokemonData.pokemonImg} alt="" />
                    </div>
                </div>
                <div className="w-full flex h-96 overflow-y-scroll bg-white text-green-400">
                    <div className="h-96 space-x-28 max-w-7xl mx-auto relative py-10 items-start flex">
                        <div className="w-96 relative uppercase">
                            {Array.isArray(ablitiesData.stats) && ablitiesData.stats.map((stat, index) => (
                                <div className="my-5" key={index}>
                                    <h1 className='my-5 text-2xl font-semibold'>{stat.stat.name}</h1>
                                    <Progress progress={stat.base_stat}
                                        progressLabelPosition="inside"
                                        textLabel="Flowbite"
                                        textLabelPosition="outside"
                                        color='green'
                                        size="xl"
                                        labelProgress
                                        labelText />
                                </div>
                            ))}
                        </div>
                        <div className="h-96 max-w-7xl mx-auto relative py-10 items-start">
                            <div className="text-3xl font-semibold p-3">
                                <h1>About</h1>
                                <h1 className='text-xl font-semibold py-3 px-1'>1.Name: {pokemonData.pokemonName}</h1>
                                <h1 className='text-xl font-semibold py-3 px-1'>2.Weight: {ablitiesData.weight}</h1>
                                <h1 className='text-xl font-semibold py-3 px-1'>2.Height: {ablitiesData.height}</h1>
                            </div>
                            <div className="text-3xl font-semibold p-3">
                                <h1>Types</h1>
                                {Array.isArray(ablitiesData.types) && ablitiesData.types.map((type, index) => (
                                    <li key={index} className='list-none text-xl font-semibold p-3'>{`${index + 1}: ${type.type.name}`}</li>
                                ))}
                            </div>
                        </div>
                        <div className="text-3xl font-semibold py-10 p-3">
                            <h1>Moves</h1>
                            {Array.isArray(ablitiesData.moves) && ablitiesData.moves.map((mov, index) => (
                                <li key={index} className='list-none text-xl font-semibold p-3'>{`${index + 1}: ${mov.move.name}`}</li>
                            ))}
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div >
        </div>
    )
}

